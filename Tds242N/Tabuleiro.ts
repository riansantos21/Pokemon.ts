import { Carta } from "./Carta";
import { Pilha } from "./Pilha";
import { CartaEnergia } from "./CartaEnergia";
import { CartaTreinador } from "./CartaTreinador";

export class Tabuleiro {
  private mao: Carta[] = [];
  private descarte = new Pilha<Carta>();

  adicionarCartaMao(carta: Carta) {
    this.mao.push(carta);
    console.log("📥 Carta adicionada à mão:");
    carta.exibirCarta();
  }

  descartarCarta(carta: Carta) {
    const index = this.mao.indexOf(carta);
    if (index >= 0) {
      this.mao.splice(index, 1);
      this.descarte.push(carta);
      console.log("🗑️ Carta descartada:");
      carta.exibirCarta();
    }
  }

  exibirMao() {
    console.log("\n🖐️ Mão:");
    this.mao.forEach((carta) => carta.exibirCarta());
  }

  exibirDescarte() {
    console.log("\n📤 Pilha de Descarte (topo -> base):");
    this.descarte.toArray().forEach((carta, index) => {
      console.log(`${index + 1}. ${carta.nome}`);
    });
  }

  getMao(): Carta[] {
    return this.mao;
  }
}