import { Vertex } from "./Vertex";

export class Edge {
  v1: Vertex;
  v2: Vertex;
  constructor([v1, v2]: [Vertex, Vertex]) {
    this.v1 = v1;
    this.v2 = v2;
  }
}
