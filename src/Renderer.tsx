import { useRef, useEffect } from "react";
import { World } from "./lib/World";
import { VGraph } from "./lib/VGraph";
import { Node } from "./lib/Graph";
import { Astar } from "./lib/Astar";
import { Vertex } from "./lib/Vertex";
import { Polygon } from "./lib/Polygon";

function sld(v1: Vertex, v2: Vertex) {
  const vx = Math.pow(v1.x - v2.x, 2);
  const vy = Math.pow(v1.y - v2.y, 2);
  return Math.sqrt(vx + vy);
}
function renderPath(
  ctx: CanvasRenderingContext2D,
  path: Node<Vertex, Polygon>[]
) {
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(path[0].value.x, path[0].value.y);
  path.forEach((pt) => {
    ctx.lineTo(pt.value.x, pt.value.y);
  });
  ctx.stroke();
}
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
    const path = Astar<Vertex, Polygon>(
      visGraph,
      world.start,
      world.finish,
      sld
    );
    world.render(context);
    if (path) renderPath(context, path);
    //visGraph.render(context);
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
