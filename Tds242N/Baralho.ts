import { Carta } from "./Carta";
import { Pilha } from "./Pilha";

export class Baralho {
  private cartas = new Pilha<Carta>();

  constructor(cartasIniciais: Carta[]) {
    this.embaralhar(cartasIniciais);
  }

  embaralhar(cartas: Carta[]) {
    for (let i = cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }
    cartas.forEach(carta => this.cartas.push(carta));
  }

  comprarCarta(): Carta | undefined {
    const carta = this.cartas.pop();
    if (carta) console.log("🔼 Comprou do topo do baralho:", carta.nome);
    return carta;
  }

  visualizarTopo(): Carta | undefined {
    return this.cartas.peek();
  }

  estaVazio(): boolean {
    return this.cartas.isEmpty();
  }

  exibirPilha() {
    console.log("\n🧱 Pilha do Baralho (topo -> base):");
    this.cartas.toArray().forEach((carta, index) => {
      console.log(`${index + 1}. ${carta.nome}`);
    });
  }
}