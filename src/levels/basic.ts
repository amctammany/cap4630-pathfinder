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
    [348, 74],
    [224, 182],
    [400, 186],
  ],
  [
    [189, 282],
    [100, 386],
    [128, 194],
  ],
];
const width = 600;
const height = 600;
const start: VertexType = [20, 300];
const finish: VertexType = [530, 150];
export default {
  start,
  finish,
  polygons: polygonPoints,
  width,
  height,
} as LevelType;
