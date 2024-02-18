import { LevelType } from "../lib/Level";
import { VertexType } from "../lib/Vertex";

/*
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
    [245, 557],
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
const origin = { x: 90, y: 500 };
const scale = { x: 2, y: 3 };
const res = polygons.map((pts) =>
  pts.map(
    ([x, y]) =>
      [(x - origin.x) * scale.x, (y - origin.y) * scale.y] as VertexType
  )
);
console.log({ res });
**/
const polygonPoints: VertexType[][] = [
  [
    [260, 348],
    [260, 498],
    [322, 510],
    [364, 441],
  ],
  [
    [502, 465],
    [538, 501],
    [568, 453],
    [552, 231],
  ],
  [
    [442, 90],
    [442, 177],
    [498, 234],
    [542, 180],
    [542, 84],
    [492, 48],
  ],
  [
    [30, 384],
    [122, 510],
    [180, 387],
    [132, 231],
    [46, 261],
  ],
  [
    [56, 51],
    [310, 51],
    [310, 171],
    [56, 171],
  ],
  [
    [380, 249],
    [486, 249],
    [486, 495],
    [380, 495],
  ],
  [
    [324, 282],
    [400, 186],
    [348, 114],
  ],
  [
    [216, 405],
    [254, 222],
    [184, 222],
  ],
];
const width = 600;
const height = 600;
const start: VertexType = [20, 200];
const finish: VertexType = [430, 40];
export default {
  start,
  finish,
  polygons: polygonPoints,
  width,
  height,
} as LevelType;
