import { useRef, useState } from "react";
import "./App.css";
import level from "./levels/basic";
import { World } from "./lib/World";
import { Renderer } from "./Renderer";
function App() {
  const canvas = useRef(null);
  const [world, setWorld] = useState(World.create(level));

  return (
    <div>
      <h1>CAP Assignment 1</h1>
      <Renderer world={world} ref={canvas.current} />
    </div>
  );
}

export default App;
