import { Level, LevelType } from "./Level";
import { Polygon } from "./Polygon";
import { Vertex, VertexType } from "./Vertex";

function renderPolygon(ctx: CanvasRenderingContext2D, polygon: Polygon) {
  ctx.fillStyle = "black";
  console.log(polygon);
  polygon.points.forEach((pt, i) => {
    if (i === 0) ctx.moveTo(polygon.points[0].x, polygon.points[0].y);
    ctx.lineTo(pt.x, pt.y);
  });
  ctx.lineTo(polygon.points[0].x, polygon.points[0].y);
  ctx.stroke();
}
export class World {
  height: number = 500;
  width: number = 500;
  polygons: Polygon[];
  start?: Vertex;
  finish?: Vertex;
  static create(data: LevelType) {
    const level = new Level(data);
    const world = new World();
    world.loadLevel(level);
    return world;
  }
  constructor() {
    this.polygons = [];
  }
  //loadLevel(polygons: VertexType[][], start: VertexType, finish: VertexType) {
  loadLevel(level: Level) {
    this.width = level.width;
    this.height = level.height;
    this.start = level.start;
    this.finish = level.finish;
    this.polygons = level.polygons;
  }
  step() {}
  render(ctx: CanvasRenderingContext2D) {
    console.log("render");
    ctx.fillStyle = "lightsteelblue";
    console.log(ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.polygons.forEach((polygon) => {
      renderPolygon(ctx, polygon);
    });
  }
}
