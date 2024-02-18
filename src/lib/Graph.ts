export class Node<V, P> {
  static count = 0;
  id: number;
  parent?: P;
  value: V;
  neighbors: Node<V, P>[] = [];
  constructor(value: V, id: number, parent?: P) {
    this.value = value;
    this.parent = parent;
    this.id = id;
  }
  addNeighbor(value: Node<V, P>) {
    this.neighbors.push(value);
  }
}
export class Edge<V, P> {
  nodes: [Node<V, P>, Node<V, P>];
  constructor(v1: Node<V, P>, v2: Node<V, P>) {
    this.nodes = [v1, v2];
  }
}
export class Graph<V, P> {
  //type GraphNode = typeof Node<V,P>
  nodes: Node<V, P>[] = [];
  edges: Edge<V, P>[] = [];
  nodeCount: number = 0;

  constructor() {}
  findNode(v: V) {
    return this.nodes.find((n) => n.value === v);
  }
  addEdge(n1: Node<V, P>, n2: Node<V, P>) {
    const edge = new Edge<V, P>(n1, n2);
    this.edges.push(edge);
    n1.addNeighbor(n2);
    n2.addNeighbor(n1);
    return edge;
  }
  addNode(value: V, parent?: P) {
    const node = new Node(value, this.nodeCount++, parent);
    //node.id = nodeCount++;
    this.nodes.push(node);
    return node;
  }
}
