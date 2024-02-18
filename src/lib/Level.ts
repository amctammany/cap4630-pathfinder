import { Polygon } from "./Polygon";
import { Vertex, VertexType } from "./Vertex";

export type LevelType = {
  polygons: VertexType[][];
  width: number;
  height: number;
  start?: VertexType;
  finish?: VertexType;
};
export class Level {
  start: Vertex;
  finish: Vertex;
  width: number;
  height: number;
  polygons: Polygon[];
  constructor(level: LevelType) {
    this.width = level.width ?? 600;
    this.height = level.height ?? 800;
    this.start = new Vertex(level.start ?? [0, 0]);
    this.finish = new Vertex(level.finish ?? [500, 500]);
    this.polygons = level.polygons.map((p) => new Polygon(p));
  }
}
