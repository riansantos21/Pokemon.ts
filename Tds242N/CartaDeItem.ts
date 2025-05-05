import { Carta } from "./Carta";

export class CartaDeItem extends Carta {
  constructor(nome: string, tipo: string, public efeito: string) {
    super(nome, tipo);
  }

  exibirCarta() {
    console.log(`Item: ${this.nome} | Tipo: ${this.tipo} | Efeito: ${this.efeito}`);
  }
}