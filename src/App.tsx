import { useRef, useState } from "react";
import "./App.css";
import level from "./levels/example";
import { World } from "./lib/World";
import { Renderer } from "./Renderer";
import { VGraph } from "./lib/VGraph";
function App() {
  const canvas = useRef(null);
  const [world, setWorld] = useState(World.create(level));

  //if (canvas.current) world.render(canvas.current);
  const advance = () => {
    setWorld((old) => {
      return old;
      //return old.step();
    });
  };
  //console.log(new VGraph(world));

  return (
    <div>
      <h1>CAP Assignment 1</h1>
      <button onClick={advance}>Advance</button>
      <Renderer world={world} ref={canvas.current} />
    </div>
  );
}

export default App;
