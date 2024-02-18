import { Vertex, VertexType } from "./Vertex";

export class Polygon {
  points: Vertex[];
  constructor(points: VertexType[]) {
    this.points = points.map((p) => new Vertex(p));
  }
}
