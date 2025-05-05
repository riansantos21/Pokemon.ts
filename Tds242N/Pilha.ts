export class Node<T> {
  constructor(public data: T, public next: Node<T> | null = null) {}
}

export class Pilha<T> {
  private topo: Node<T> | null = null;

  push(data: T): void {
    this.topo = new Node(data, this.topo);
  }

  pop(): T | undefined {
    if (!this.topo) return undefined;
    const data = this.topo.data;
    this.topo = this.topo.next;
    return data;
  }

  peek(): T | undefined {
    return this.topo?.data;
  }

  isEmpty(): boolean {
    return this.topo === null;
  }

  toArray(): T[] {
    const result: T[] = [];
    let atual = this.topo;
    while (atual) {
      result.push(atual.data);
      atual = atual.next;
    }
    return result;
  }
}