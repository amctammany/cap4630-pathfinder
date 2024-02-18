import { LevelType } from "../lib/Level";
import { VertexType } from "../lib/Vertex";

const polygonPoints: VertexType[][] = [
  [
    [260, 348],
    [260, 498],
    [322, 510],
    [364, 441],
  ],
  [
    [324, 282],
    [400, 186],
    [348, 114],
  ],
];
const width = 600;
const height = 600;
const start: VertexType = [20, 500];
const finish: VertexType = [530, 40];
export default {
  start,
  finish,
  polygons: polygonPoints,
  width,
  height,
} as LevelType;
