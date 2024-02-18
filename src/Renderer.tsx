import { useRef, useEffect } from "react";
import { World } from "./lib/World";
import { VGraph } from "./lib/VGraph";

export const Renderer = ({
  world,
  ...canvasProps
}: { world: World } & React.ComponentProps<"canvas">) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) return;
    const visGraph = new VGraph(world);
    world.render(context);
    visGraph.render(context);
  }, [world]);
  return (
    <canvas
      ref={canvasRef}
      {...canvasProps}
      width={world.width}
      height={world.height}
    />
  );
};
