import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./components/MacContainer";

export default function App() {
  return (
    <div className="w-full h-screen ">
    <div className="absolute flex flex-col items-center  text-white top-[10%] left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display',sans-serif]
">
      <h3 className="text-6xl tracking-tighter font-[500]">mackbook pro.</h3>
      <h5>Oh so pro !</h5>
      <p className="text-center w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio mollitia quod quae in temporibus libero explicabo accusantium, sunt quis doloremque laboriosam tempore unde nam pariatur quos? Nulla voluptatum veritatis provident.</p>
          </div>
    <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
      <OrbitControls />
      <Environment
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
        ]}
      />
      <ScrollControls pages={3}>
        <MacContainer />
      </ScrollControls>
      {/* <mesh>
        <boxGeometry />
      </mesh> */}
    </Canvas>
    </div>
  );
}
