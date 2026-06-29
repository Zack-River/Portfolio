const fs = require('fs');

let scene = fs.readFileSync('components/Scene3D.tsx', 'utf8');
const opt = fs.readFileSync('Robot_playground_opt.jsx', 'utf8');

const modelStart = opt.indexOf('export function Model(props) {');
const modelEnd = opt.lastIndexOf('}') + 1;
let newModel = opt.substring(modelStart, modelEnd);

const useEffectStr = `
  useEffect(() => {
    // Play all animations
    if (actions) {
      Object.values(actions).forEach((action) => {
        action?.play();
      });
    }

    // Retheme the materials to match canvas-light and electric vibes
    if (materials.holo1) {
      materials.holo1.color.set("#0ea5e9");
      materials.holo1.emissive.set("#0ea5e9");
      materials.holo1.emissiveIntensity = 0.8;
      materials.holo1.transparent = true;
      materials.holo1.opacity = 0.9;
    }
    if (materials.material) {
      materials.material.color.set("#1a1a1a");
      materials.material.roughness = 0.2;
      materials.material.metalness = 0.8;
    }
  }, [actions, materials]);
`;
newModel = newModel.replace('  return (', useEffectStr + '\n  return (');

// Extract old model bounds carefully
const oldModelStart = scene.indexOf('export function Model(props: any) {');
const constScene3DStart = scene.indexOf('const Scene3D = () => {');
const oldModelEnd = constScene3DStart; // the newline before const Scene3D

const oldModelStr = scene.substring(oldModelStart, oldModelEnd);

scene = scene.replace(oldModelStr, newModel + '\n\n');

if (!scene.includes('useGraph')) {
    scene = scene.replace('import { Canvas } from "@react-three/fiber";', 'import { Canvas, useGraph } from "@react-three/fiber";');
}
if (!scene.includes('SkeletonUtils')) {
    scene = scene.replace('import * as THREE from "three";', 'import * as THREE from "three";\nimport { SkeletonUtils } from "three-stdlib";');
}

fs.writeFileSync('components/Scene3D.tsx', scene);
console.log('Replaced successfully.');
