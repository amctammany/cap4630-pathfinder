import { useRef, useEffect } from "react";
import { World } from "./lib/World";

export const Renderer = ({
  world,
  ...canvasProps
}: { world: World } & React.ComponentProps<"canvas">) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    //if (canvas == null) return;
    const context = canvas?.getContext("2d");
    if (!context) return;
    //Our first draw
    console.log(world);
    //context.fillStyle = "#000000";
    //context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    world.render(context);
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
