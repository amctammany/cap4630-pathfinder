import { Node, Edge, Graph } from "./Graph";
function d(n1: Node<any, any>, n2: Node<any, any>) {
  return 1;
}
const MAX_VALUE = 99999;
interface PriorityQueue<T> {
  includes(v: T): boolean;
  insert(item: T, priority: number): void;
  peek(): T | null;
  pop(): T | null;
  remove(i: T): void;
  size(): number;
  isEmpty(): boolean;
}
const priorityQueue = <T>(): PriorityQueue<T> => {
  const data: [number, T][] = [];

  return {
    insert: (i, p) => data.push([p, i]),

    isEmpty: () => data.length == 0,

    includes: (v: T) => !!data.find((d) => d[1] === v),
    peek: () =>
      data.length == 0
        ? null
        : data.reduce((min, current) =>
            current[0] < min[0] ? current : min
          )[1],

    pop: () => {
      if (data.length == 0) return null;

      let min = data[0];
      let minIndex = -1;
      data.forEach((item, index) => {
        if (item[0] < min[0]) {
          min = item;
          minIndex = index;
        }
      });

      data.splice(minIndex, 1);
      return min[1];
    },

    remove: (i: T) => {
      const index = data.findIndex(([_, v]) => v === i);
      data.splice(index, 1);
    },
    size: () => data.length,
  };
};
function createSolution<V, P>(
  prev: Record<number, Node<V, P>>,
  current: Node<V, P>
) {
  const path = [current];
  while (prev[current.id]) {
    current = prev[current.id];
    path.push(current);
  }
  return path.reverse();
}
export function Astar<V, P>(
  graph: Graph<V, P>,
  start: V,
  goal: V,
  h: any // (node: Node<V, P>) => number
) {
  const open = priorityQueue<Node<V, P>>();
  const startNode = graph.findNode(start);
  const finishNode = graph.findNode(goal);
  if (!startNode || !finishNode) return;
  open.insert(startNode!, 0);
  const prev: Record<number, Node<V, P>> = {};
  const gScore = Array.from(Array(graph.nodes.length)).fill(MAX_VALUE);
  const fScore = Array.from(Array(graph.nodes.length)).fill(MAX_VALUE);
  gScore[startNode.id] = 0;
  fScore[startNode.id] = h(startNode.value, goal);

  while (!open.isEmpty()) {
    const current = open.pop();
    if (current?.value === goal) {
      const res = createSolution<V, P>(prev, current);
      return res;
    }
    open.remove(current!);
    current?.neighbors.forEach((neighbor) => {
      const tmp = gScore[current.id] + d(current, neighbor);
      if (tmp < gScore[neighbor.id]) {
        prev[neighbor.id] = current;
        gScore[neighbor.id] = tmp;
        fScore[neighbor.id] = tmp + h(neighbor.value, goal);
        if (!open.includes(neighbor))
          open.insert(neighbor, fScore[neighbor.id]);
      }
    });
  }
  console.log({ gScore, fScore, open, prev });
  console.error("fail");
}
