import { Level, LevelType } from "./Level";
import { Polygon } from "./Polygon";
import { Vertex } from "./Vertex";

const pointWidth = 20;
const pointHeight = 20;
function renderPoint(ctx: CanvasRenderingContext2D, point: Vertex) {
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.fillRect(
    point.x - pointWidth / 2,
    point.y - pointHeight / 2,
    pointWidth,
    pointHeight
  );
}

function renderPolygon(ctx: CanvasRenderingContext2D, polygon: Polygon) {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "red";
  ctx.fillStyle = "#f3a";
  polygon.points.forEach((pt, i) => {
    if (i === 0) ctx.moveTo(polygon.points[0].x, polygon.points[0].y);
    ctx.lineTo(pt.x, pt.y);
  });
  ctx.lineTo(polygon.points[0].x, polygon.points[0].y);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}
export class World {
  height: number = 500;
  width: number = 500;
  polygons: Polygon[];
  start: Vertex;
  finish: Vertex;
  static create(data: LevelType) {
    const level = new Level(data);
    const world = new World();
    world.loadLevel(level);
    return world;
  }
  constructor() {
    this.polygons = [];
    this.start = new Vertex([0, 0]);
    this.finish = new Vertex([300, 300]);
  }
  loadLevel(level: Level) {
    this.width = level.width;
    this.height = level.height;
    this.start = level.start;
    this.finish = level.finish;
    this.polygons = level.polygons;
  }
  step() {}
  drawStart(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    renderPoint(ctx, this.start);
    ctx.font = "18px Arial";
    ctx.fillText("Start", this.start.x - 20, this.start.y + 30);
  }
  drawFinish(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "green";
    renderPoint(ctx, this.finish);
    ctx.font = "18px Arial";
    ctx.fillText("Finish", this.finish.x - 20, this.finish.y + 30);
  }
  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "lightsteelblue";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.drawStart(ctx);
    this.drawFinish(ctx);

    this.polygons.forEach((polygon) => {
      renderPolygon(ctx, polygon);
    });
  }
}
