import { LevelType } from "../lib/Level";
import { VertexType } from "../lib/Vertex";

const polygons: VertexType[][] = [
  [
    [220, 616],
    [220, 666],
    [251, 670],
    [272, 647],
  ],

  [
    [341, 655],
    [359, 667],
    [374, 651],
    [366, 577],
  ],

  [
    [311, 530],
    [311, 559],
    [339, 578],
    [361, 560],
    [361, 528],
    [336, 516],
  ],
  [
    [105, 628],
    [151, 670],
    [180, 629],
    [156, 577],
    [113, 587],
  ],

  [
    [118, 517],
    [245, 517],
    [245, 577],
    [118, 557],
  ],
  [
    [280, 583],
    [333, 583],
    [333, 665],
    [280, 665],
  ],

  [
    [252, 594],
    [290, 562],
    [264, 538],
  ],

  [
    [198, 635],
    [217, 574],
    [182, 574],
  ],
];

const width = 600;
const height = 800;
const start: VertexType = [120, 650];
const end: VertexType = [380, 560];
const minX = 100;
const maxX = 400;
const minY = 500;
const maxY = 800;
const scaleX = (maxX - minX) / width;
const scaleY = (maxY - minY) / height;
export default {
  start,
  end,
  polygons,
  polygons1: polygons.map((p) =>
    p.map(([x, y]) => [
      (width * scaleX * (x - minX)) / width - minX,
      (height * scaleY * (y - minY)) / height + minY,
    ])
  ),
  width,
  height,
} as LevelType;
