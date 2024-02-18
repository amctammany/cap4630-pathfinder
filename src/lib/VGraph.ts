import { Vertex, VertexType } from "./Vertex";
import { World } from "./World";

type Line = [VertexType, VertexType];
type LineSegment = [Vertex, Vertex];
function checkCollision(a: Vertex, b: Vertex, c: Vertex, d: Vertex) {
  //let res = true;
  const denom = (b.x - a.x) * (d.y - c.y) - (b.y - a.y) * (d.x - c.x);
  if (denom === 0) return false;
  const num1 = (a.y - c.y) * (d.x - c.x) - (a.x - c.x) * (d.y - c.y);
  const num2 = (a.y - c.y) * (b.x - a.x) - (a.x - c.x) * (b.y - a.y);
  if (num1 === 0 || num2 === 0) return false;
  const r = num1 / denom;
  const s = num2 / denom;
  //console.log("Check Collision", { a, b, c, d, denom, num1, num2, r, s, res });
  //if (res === false) return res;
  return r > 0 && r < 1 && s > 0 && s < 1;
}

class Node {
  vertex: Vertex;
  constructor(vertex: Vertex) {
    this.vertex = vertex;
  }
}
class Edge {
  nodes: [Node, Node];
  constructor(v1: Node, v2: Node) {
    this.nodes = [v1, v2];
  }
}

export class VGraph {
  nodes: Node[] = [];
  edges: Edge[] = [];

  constructor(world: World) {
    this.addNode(world.start);
    this.addNode(world.finish);
    const edges: LineSegment[] = [];
    world.polygons.forEach((polygon) => {
      const nodes = polygon.points.map((pt) => {
        const node = this.addNode(pt);
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
    //this.nodes = [];
    //this.edges = [];
  }
  calculateAdjacency(edges: LineSegment[]) {
    console.log(edges);
    this.nodes.forEach((current) => {
      this.nodes.forEach((next) => {
        if (current === next) return;
        const r = edges.every(
          (edge) => !checkCollision(current.vertex, next.vertex, ...edge)
        );
        if (r) this.addEdge(current, next);
      });
    });
  }
  addEdge(n1: Node, n2: Node) {
    const edge = new Edge(n1, n2);
    this.edges.push(edge);
    return edge;
    //return node;
  }
  addNode(vertex: Vertex) {
    const node = new Node(vertex);
    this.nodes.push(node);
    return node;
  }
  render(ctx: CanvasRenderingContext2D) {
    this.edges.forEach((edge) => {
      ctx.beginPath();
      ctx.lineWidth = 2;
      const v1 = edge.nodes[0].vertex;
      const v2 = edge.nodes[1].vertex;
      ctx.moveTo(v1.x, v1.y);
      ctx.lineTo(v2.x, v2.y);
      ctx.stroke();
    });
  }
}
