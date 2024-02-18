import { Graph } from "./Graph";
import { Polygon } from "./Polygon";
import { Vertex } from "./Vertex";
import { World } from "./World";

type LineSegment = [Vertex, Vertex];
function checkCollision(a: Vertex, b: Vertex, c: Vertex, d: Vertex) {
  const denom = (b.x - a.x) * (d.y - c.y) - (b.y - a.y) * (d.x - c.x);
  if (denom === 0) return false;
  const num1 = (a.y - c.y) * (d.x - c.x) - (a.x - c.x) * (d.y - c.y);
  const num2 = (a.y - c.y) * (b.x - a.x) - (a.x - c.x) * (b.y - a.y);
  if (num1 === 0 || num2 === 0) return false;
  const r = num1 / denom;
  const s = num2 / denom;
  return r > 0 && r < 1 && s > 0 && s < 1;
}
export class VGraph extends Graph<Vertex, Polygon> {
  constructor(world: World) {
    super();
    this.addNode(world.start);
    this.addNode(world.finish);
    const edges: LineSegment[] = [];
    world.polygons.forEach((polygon) => {
      const nodes = polygon.points.map((pt) => {
        const node = this.addNode(pt, polygon);
        return node;
      });
      nodes.forEach((node, i) => {
        if (i == nodes.length - 1) {
          this.addEdge(node, nodes[0]);
        } else {
          this.addEdge(node, nodes[i + 1]);
        }
      });
      edges.push(...polygon.edges);
    });
    this.calculateAdjacency(edges);
  }
  calculateAdjacency(edges: LineSegment[]) {
    this.nodes.forEach((current) => {
      this.nodes.forEach((next) => {
        if (current === next) return;
        if (current.parent && current.parent === next.parent) return;
        const r = edges.every(
          (edge) => !checkCollision(current.value, next.value, ...edge)
        );
        if (r) this.addEdge(current, next);
      });
    });
  }
  render(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = "black";
    this.edges.forEach((edge) => {
      ctx.strokeStyle = "black";
      ctx.beginPath();
      ctx.lineWidth = 1;
      const v1 = edge.nodes[0].value;
      const v2 = edge.nodes[1].value;
      ctx.moveTo(v1.x, v1.y);
      ctx.lineTo(v2.x, v2.y);
      ctx.stroke();
    });
  }
}
