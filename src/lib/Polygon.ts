import { Vertex, VertexType } from "./Vertex";

export class Polygon {
  points: Vertex[];
  edges: [Vertex, Vertex][] = [];
  constructor(points: VertexType[]) {
    this.points = points.map((p) => new Vertex(p));
    this.points.forEach((pt, i) => {
      if (i == this.points.length - 1) {
        this.edges.push([pt, this.points[0]]);
      } else {
        this.edges.push([pt, this.points[i + 1]]);
      }
    });
  }
}
