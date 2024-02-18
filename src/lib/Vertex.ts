export type VertexType = [number, number];
export class Vertex {
  x: number;
  y: number;
  constructor([x, y]: [number, number]) {
    this.x = x;
    this.y = y;
  }
}
