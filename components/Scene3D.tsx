import React, { useRef, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Environment,
} from "@react-three/drei";
import * as THREE from "@/node_modules/@types/three";

export function Model(props: any) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/robot_playground_draco.glb",
    "/draco/",
  ) as any;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play only the main idle animation to save CPU
    if (actions && Object.values(actions).length > 0) {
      const action = Object.values(actions)[0];
      action?.play();
    }

    // Retheme the materials to match canvas-light and electric vibes
    if (materials.holo1) {
      materials.holo1.color.set("#0ea5e9"); // electric blue
      materials.holo1.emissive.set("#0ea5e9");
      materials.holo1.emissiveIntensity = 0.8;
      materials.holo1.transparent = true;
      materials.holo1.opacity = 0.9;
    }
    if (materials.material) {
      materials.material.color.set("#1a1a1a"); // canvas-dark
      materials.material.roughness = 0.2;
      materials.material.metalness = 0.8;
    }
  }, [actions, materials]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="holo" scale={0.107}>
          <group
            name="group36"
            position={[0.33, 0, -0.099]}
            rotation={[-Math.PI, -0.142, -Math.PI]}
            scale={0.989}
          >
            <group name="group39" rotation={[0, 0.877, 0]}>
              <group name="group37" position={[-4.63, 14.294, 1.994]}>
                <group
                  name="group31"
                  position={[4.63, -4.887, -1.994]}
                  rotation={[0.006, 0, 0.01]}
                  scale={1.182}
                >
                  <group
                    name="pPlatonic3"
                    position={[-0.348, -0.124, -0.324]}
                    scale={0.001}
                  >
                    <mesh
                      name="pPlatonic3_holo1_0"
                      geometry={nodes.pPlatonic3_holo1_0.geometry}
                      material={materials.holo1}
                    />
                  </group>
                  <group
                    name="group35"
                    position={[0.225, 0.107, 0.003]}
                    rotation={[-Math.PI, -1.463, Math.PI]}
                  >
                    <group name="group38" position={[0.039, 0.755, 0.248]}>
                      <group
                        name="group29"
                        position={[-0.027, -10.245, -0.036]}
                        rotation={[0, Math.PI / 4, 0]}
                      >
                        <group
                          name="group21"
                          position={[-12.687, 10.697, 0]}
                          scale={0.245}
                        >
                          <group
                            name="MASH1_ReproMesh12"
                            position={[0, 0.239, 0]}
                            rotation={[-1.132, 0, Math.PI / 2]}
                            scale={[1.033, 1, 1.033]}
                          >
                            <mesh
                              name="MASH1_ReproMesh12_holo1_0"
                              geometry={
                                nodes.MASH1_ReproMesh12_holo1_0.geometry
                              }
                              material={materials.holo1}
                            />
                          </group>
                          <group name="group14" rotation={[0, 1.132, 0]}>
                            <group
                              name="group30"
                              rotation={[0.492, 0, 0]}
                              scale={3.169}
                            >
                              <group name="pSuperShape2" scale={2.076}>
                                <mesh
                                  name="pSuperShape2_holo1_0"
                                  geometry={nodes.pSuperShape2_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                              <group name="pSuperShape3" scale={2.076}>
                                <mesh
                                  name="pSuperShape3_holo1_0"
                                  geometry={nodes.pSuperShape3_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="group28"
                        position={[-0.027, -10.245, -0.036]}
                        rotation={[0, Math.PI / 2, 0]}
                      >
                        <group
                          name="group21_1"
                          position={[-12.687, 10.697, 0]}
                          scale={0.245}
                        >
                          <group
                            name="MASH1_ReproMesh12_1"
                            position={[0, 0.239, 0]}
                            rotation={[-1.132, 0, Math.PI / 2]}
                            scale={[1.033, 1, 1.033]}
                          >
                            <group name="MASH1_ReproMesh19">
                              <mesh
                                name="MASH1_ReproMesh19_holo1_0"
                                geometry={
                                  nodes.MASH1_ReproMesh19_holo1_0.geometry
                                }
                                material={materials.holo1}
                              />
                            </group>
                          </group>
                          <group name="group14_1" rotation={[0, 1.132, 0]}>
                            <group
                              name="group7"
                              rotation={[0.317, -0.659, 1.521]}
                              scale={2.048}
                            >
                              <group name="pGear1">
                                <mesh
                                  name="pGear1_holo1_0"
                                  geometry={nodes.pGear1_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                              <group name="pGear2">
                                <mesh
                                  name="pGear2_holo1_0"
                                  geometry={nodes.pGear2_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="group27"
                        position={[-0.027, -10.245, -0.036]}
                        rotation={[-Math.PI, Math.PI / 4, Math.PI]}
                      >
                        <group
                          name="group20"
                          position={[-12.687, 10.697, 0]}
                          scale={0.245}
                        >
                          <group
                            name="MASH1_ReproMesh11"
                            position={[0, 0.239, 0]}
                            rotation={[-1.132, 0, Math.PI / 2]}
                            scale={[1.033, 1, 1.033]}
                          >
                            <group name="MASH1_ReproMesh18">
                              <mesh
                                name="MASH1_ReproMesh18_holo1_0"
                                geometry={
                                  nodes.MASH1_ReproMesh18_holo1_0.geometry
                                }
                                material={materials.holo1}
                              />
                            </group>
                          </group>
                          <group name="group13" rotation={[0, 1.132, 0]}>
                            <group
                              name="group6"
                              position={[0, 0.028, 0]}
                              rotation={[0.479, 0.1, -0.002]}
                              scale={2.37}
                            >
                              <group name="pHelix1">
                                <mesh
                                  name="pHelix1_holo1_0"
                                  geometry={nodes.pHelix1_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                              <group name="pHelix2">
                                <mesh
                                  name="pHelix2_holo1_0"
                                  geometry={nodes.pHelix2_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="group26"
                        position={[-0.027, -10.245, -0.036]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                      >
                        <group
                          name="group19"
                          position={[-12.687, 10.697, 0]}
                          scale={0.245}
                        >
                          <group
                            name="MASH1_ReproMesh10"
                            position={[0, 0.239, 0]}
                            rotation={[-1.132, 0, Math.PI / 2]}
                            scale={[1.033, 1, 1.033]}
                          >
                            <group name="MASH1_ReproMesh17">
                              <mesh
                                name="MASH1_ReproMesh17_holo1_0"
                                geometry={
                                  nodes.MASH1_ReproMesh17_holo1_0.geometry
                                }
                                material={materials.holo1}
                              />
                            </group>
                          </group>
                          <group name="group12" rotation={[0, 1.132, 0]}>
                            <group
                              name="group4"
                              position={[-0.254, 1.103, -0.402]}
                              rotation={[-0.176, -0.673, 0.273]}
                              scale={1.554}
                            >
                              <group
                                name="pPyramid1"
                                scale={[5.263, 7.637, 5.263]}
                              >
                                <mesh
                                  name="pPyramid1_holo1_0"
                                  geometry={nodes.pPyramid1_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                              <group
                                name="pPyramid2"
                                scale={[5.572, 8.085, 5.572]}
                              >
                                <mesh
                                  name="pPyramid2_holo1_0"
                                  geometry={nodes.pPyramid2_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="group25"
                        position={[-0.027, -10.245, -0.036]}
                        rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
                      >
                        <group
                          name="group18"
                          position={[-12.692, 10.697, 0]}
                          scale={0.245}
                        >
                          <group
                            name="MASH1_ReproMesh9"
                            position={[0, 0.239, 0]}
                            rotation={[-1.132, 0, Math.PI / 2]}
                            scale={[1.033, 1, 1.033]}
                          >
                            <group name="MASH1_ReproMesh16">
                              <mesh
                                name="MASH1_ReproMesh16_holo1_0"
                                geometry={
                                  nodes.MASH1_ReproMesh16_holo1_0.geometry
                                }
                                material={materials.holo1}
                              />
                            </group>
                          </group>
                          <group name="group11" rotation={[0, 1.132, 0]}>
                            <group
                              name="group5"
                              rotation={[0.222, 0.16, 0.928]}
                              scale={1.89}
                            >
                              <group name="pTorus2">
                                <mesh
                                  name="pTorus2_holo1_0"
                                  geometry={nodes.pTorus2_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                              <group name="pTorus1">
                                <mesh
                                  name="pTorus1_holo1_0"
                                  geometry={nodes.pTorus1_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="group23"
                        position={[-0.027, -10.245, -0.036]}
                        rotation={[0, -Math.PI / 4, 0]}
                      >
                        <group
                          name="group16"
                          position={[-12.687, 10.697, 0]}
                          scale={0.245}
                        >
                          <group
                            name="MASH1_ReproMesh7"
                            position={[0, 0.239, 0]}
                            rotation={[-1.132, 0, Math.PI / 2]}
                            scale={[1.033, 1, 1.033]}
                          >
                            <group name="MASH1_ReproMesh14">
                              <mesh
                                name="MASH1_ReproMesh14_holo1_0"
                                geometry={
                                  nodes.MASH1_ReproMesh14_holo1_0.geometry
                                }
                                material={materials.holo1}
                              />
                            </group>
                          </group>
                          <group
                            name="group9"
                            rotation={[0, 1.132, 0]}
                            scale={1.303}
                          >
                            <group
                              name="group2"
                              rotation={[-0.623, -0.617, 0.102]}
                            >
                              <group name="pCube1" scale={4.808}>
                                <mesh
                                  name="pCube1_holo1_0"
                                  geometry={nodes.pCube1_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                              <group name="pCube2" scale={4.918}>
                                <mesh
                                  name="pCube2_holo1_0"
                                  geometry={nodes.pCube2_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="group22"
                        position={[-0.027, -10.245, -0.036]}
                      >
                        <group
                          name="group15"
                          position={[-12.687, 10.697, 0]}
                          scale={0.245}
                        >
                          <group
                            name="MASH1_ReproMesh6"
                            position={[0, 0.239, 0]}
                            rotation={[-1.132, 0, Math.PI / 2]}
                            scale={[1.033, 1, 1.033]}
                          >
                            <group name="MASH1_ReproMesh13">
                              <mesh
                                name="MASH1_ReproMesh13_holo1_0"
                                geometry={
                                  nodes.MASH1_ReproMesh13_holo1_0.geometry
                                }
                                material={materials.holo1}
                              />
                            </group>
                          </group>
                          <group name="group8" rotation={[0, 1.132, 0]}>
                            <group
                              name="group1"
                              rotation={[-0.513, 0, 0]}
                              scale={[1.223, 0.98, 1.223]}
                            >
                              <group name="pCylinder2" scale={3.569}>
                                <mesh
                                  name="pCylinder2_holo1_0"
                                  geometry={nodes.pCylinder2_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                              <group name="pCylinder3" scale={3.665}>
                                <mesh
                                  name="pCylinder3_holo1_0"
                                  geometry={nodes.pCylinder3_holo1_0.geometry}
                                  material={materials.holo1}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="pCylinder4"
                        position={[-0.027, 0.458, -0.036]}
                        scale={[0.818, 0.439, 0.818]}
                      >
                        <mesh
                          name="pCylinder4_holo1_0"
                          geometry={nodes.pCylinder4_holo1_0.geometry}
                          material={materials.holo1}
                        />
                      </group>
                    </group>
                    <group
                      name="group24"
                      position={[0.021, -10.723, 0.224]}
                      rotation={[0, -Math.PI / 2, 0]}
                    >
                      <group
                        name="group17"
                        position={[-12.356, 11.797, 0.231]}
                        scale={0.295}
                      >
                        <group
                          name="group10"
                          rotation={[Math.PI, -1.163, Math.PI]}
                        >
                          <group name="group3" scale={1.445}>
                            <group name="pPlatonic1" scale={3.239}>
                              <mesh
                                name="pPlatonic1_holo1_0"
                                geometry={nodes.pPlatonic1_holo1_0.geometry}
                                material={materials.holo1}
                              />
                            </group>
                            <group name="pPlatonic2" scale={3.414}>
                              <mesh
                                name="pPlatonic2_holo1_0"
                                geometry={nodes.pPlatonic2_holo1_0.geometry}
                                material={materials.holo1}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="MASH1_ReproMesh8"
                          position={[0.227, 0.006, -0.549]}
                          rotation={[-1.132, 0, Math.PI / 2]}
                          scale={[0.818, 0.792, 0.818]}
                        >
                          <group name="MASH1_ReproMesh15">
                            <mesh
                              name="MASH1_ReproMesh15_holo1_0"
                              geometry={
                                nodes.MASH1_ReproMesh15_holo1_0.geometry
                              }
                              material={materials.holo1}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="ground" position={[0, 0.042, 0]} scale={0.107}>
          <group
            name="pPipe4"
            position={[0, -0.429, 0]}
            rotation={[0, -0.311, 0]}
          >
            <group name="MASH1_ReproMesh2" position={[0, 0.429, 0]}>
              <mesh
                name="MASH1_ReproMesh2_holo1_0"
                geometry={nodes.MASH1_ReproMesh2_holo1_0.geometry}
                material={materials.holo1}
              />
            </group>
            <mesh
              name="pPipe4_holo1_0"
              geometry={nodes.pPipe4_holo1_0.geometry}
              material={materials.holo1}
            />
          </group>
          <group
            name="pPipe2"
            position={[0, -0.576, 0]}
            rotation={[0, 0.311, 0]}
          >
            <group
              name="MASH1_ReproMesh3"
              position={[0, 0.576, 0]}
              scale={[0.819, 0.804, 0.819]}
            >
              <mesh
                name="MASH1_ReproMesh3_holo1_0"
                geometry={nodes.MASH1_ReproMesh3_holo1_0.geometry}
                material={materials.holo1}
              />
            </group>
            <group name="pPipe3" rotation={[0, 0.684, 0]} scale={0.856}>
              <mesh
                name="pPipe3_holo1_0"
                geometry={nodes.pPipe3_holo1_0.geometry}
                material={materials.holo1}
              />
            </group>
            <mesh
              name="pPipe2_holo1_0"
              geometry={nodes.pPipe2_holo1_0.geometry}
              material={materials.holo1}
            />
          </group>
          <group name="pPipe1" rotation={[0, -0.311, 0]}>
            <group name="MASH1_ReproMesh1" scale={[1.033, 1, 1.033]}>
              <mesh
                name="MASH1_ReproMesh1_holo1_0"
                geometry={nodes.MASH1_ReproMesh1_holo1_0.geometry}
                material={materials.holo1}
              />
            </group>
            <mesh
              name="pPipe1_holo1_0"
              geometry={nodes.pPipe1_holo1_0.geometry}
              material={materials.holo1}
            />
          </group>
        </group>
        <primitive object={nodes._rootJoint} />
        <mesh
          name="pDisc1_holo1_0"
          geometry={nodes.pDisc1_holo1_0.geometry}
          material={materials.holo1}
          scale={1.189}
        />
        <skinnedMesh
          name="Object_162"
          geometry={nodes.Object_162.geometry}
          material={materials.material}
          skeleton={nodes.Object_162.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_164"
          geometry={nodes.Object_164.geometry}
          material={materials.material}
          skeleton={nodes.Object_164.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_166"
          geometry={nodes.Object_166.geometry}
          material={materials.material}
          skeleton={nodes.Object_166.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_168"
          geometry={nodes.Object_168.geometry}
          material={materials.material}
          skeleton={nodes.Object_168.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_170"
          geometry={nodes.Object_170.geometry}
          material={materials.material}
          skeleton={nodes.Object_170.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_172"
          geometry={nodes.Object_172.geometry}
          material={materials.material}
          skeleton={nodes.Object_172.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_174"
          geometry={nodes.Object_174.geometry}
          material={materials.material}
          skeleton={nodes.Object_174.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_176"
          geometry={nodes.Object_176.geometry}
          material={materials.material}
          skeleton={nodes.Object_176.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_178"
          geometry={nodes.Object_178.geometry}
          material={materials.material}
          skeleton={nodes.Object_178.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_180"
          geometry={nodes.Object_180.geometry}
          material={materials.material}
          skeleton={nodes.Object_180.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_182"
          geometry={nodes.Object_182.geometry}
          material={materials.material}
          skeleton={nodes.Object_182.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_184"
          geometry={nodes.Object_184.geometry}
          material={materials.material}
          skeleton={nodes.Object_184.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_186"
          geometry={nodes.Object_186.geometry}
          material={materials.material}
          skeleton={nodes.Object_186.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_188"
          geometry={nodes.Object_188.geometry}
          material={materials.material}
          skeleton={nodes.Object_188.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_190"
          geometry={nodes.Object_190.geometry}
          material={materials.material}
          skeleton={nodes.Object_190.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_192"
          geometry={nodes.Object_192.geometry}
          material={materials.material}
          skeleton={nodes.Object_192.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_194"
          geometry={nodes.Object_194.geometry}
          material={materials.material}
          skeleton={nodes.Object_194.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_196"
          geometry={nodes.Object_196.geometry}
          material={materials.material}
          skeleton={nodes.Object_196.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_198"
          geometry={nodes.Object_198.geometry}
          material={materials.material}
          skeleton={nodes.Object_198.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_200"
          geometry={nodes.Object_200.geometry}
          material={materials.material}
          skeleton={nodes.Object_200.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_202"
          geometry={nodes.Object_202.geometry}
          material={materials.material}
          skeleton={nodes.Object_202.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_204"
          geometry={nodes.Object_204.geometry}
          material={materials.material}
          skeleton={nodes.Object_204.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_206"
          geometry={nodes.Object_206.geometry}
          material={materials.material}
          skeleton={nodes.Object_206.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_208"
          geometry={nodes.Object_208.geometry}
          material={materials.material}
          skeleton={nodes.Object_208.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_210"
          geometry={nodes.Object_210.geometry}
          material={materials.material}
          skeleton={nodes.Object_210.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_212"
          geometry={nodes.Object_212.geometry}
          material={materials.material}
          skeleton={nodes.Object_212.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_214"
          geometry={nodes.Object_214.geometry}
          material={materials.material}
          skeleton={nodes.Object_214.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_216"
          geometry={nodes.Object_216.geometry}
          material={materials.material}
          skeleton={nodes.Object_216.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_218"
          geometry={nodes.Object_218.geometry}
          material={materials.material}
          skeleton={nodes.Object_218.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_220"
          geometry={nodes.Object_220.geometry}
          material={materials.material}
          skeleton={nodes.Object_220.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_222"
          geometry={nodes.Object_222.geometry}
          material={materials.material}
          skeleton={nodes.Object_222.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_224"
          geometry={nodes.Object_224.geometry}
          material={materials.material}
          skeleton={nodes.Object_224.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_226"
          geometry={nodes.Object_226.geometry}
          material={materials.material}
          skeleton={nodes.Object_226.skeleton}
          scale={0.057}
        />
        <skinnedMesh
          name="Object_228"
          geometry={nodes.Object_228.geometry}
          material={materials.material}
          skeleton={nodes.Object_228.skeleton}
          scale={0.057}
        />
      </group>
    </group>
  );
}

const ModelWrapper = ({
  isMobile,
  isTablet,
}: {
  isMobile: boolean;
  isTablet: boolean;
}) => {
  const { viewport } = useThree();
  const positionX = isMobile ? 0 : viewport.width / 4;

  // Smoothly scale down on narrow screens (like 1179px) so the left arm doesn't overlap the text.
  // viewport.width is ~13.5 on 1080p, so 13.5 / 5.5 = ~2.4 (caps at 2).
  // viewport.width is ~7.9 on 1179px, so 7.9 / 5.5 = ~1.43 (perfectly fits without overlap).
  const scale = isMobile
    ? 1.4
    : isTablet
      ? 1.2
      : Math.min(2, Math.max(1.3, viewport.width / 5.5));

  // The robot's origin is at its feet. To keep its chest vertically centered (at Y=0)
  // as it scales, positionY must proportionally move up.
  // At scale=2, positionY=-4 perfectly centered it. So the ratio is -2 * scale.
  const positionY = isMobile ? -3 : isTablet ? -1 : -1 * scale;

  return <Model position={[positionX, positionY, 0]} scale={scale} />;
};

// Preload is handled by useGLTF inside Model — no eager preload needed

const Scene3D: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full bg-transparent relative overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 45 }}
        dpr={1}
        gl={{
          powerPreference: "high-performance",
          antialias: !isMobile,
          alpha: true,
        }}
      >
        {/* Soft, even ambient lighting to match light background */}
        <ambientLight intensity={0.8} />

        {/* Directional light acting as a main sun or key light */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          color="#ffffff"
        />

        {/* Subtle electric blue rim light from the side */}
        <pointLight position={[-10, 2, -5]} intensity={2} color="#0ea5e9" />

        {/* Fill light to soften harsh shadows */}
        <pointLight position={[0, -5, 5]} intensity={0.5} color="#ffffff" />

        <Environment preset="city" />

        <ModelWrapper isMobile={isMobile} isTablet={isTablet} />

        {/* <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 2}
        /> */}
      </Canvas>
    </div>
  );
};

useGLTF.preload("/robot_playground_draco.glb", "/draco/");

export default Scene3D;
