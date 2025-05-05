import { Carta } from "./Carta";

export class CartaEnergia extends Carta {
  constructor(nome: string, tipo: string, public valor: number) {
    super(nome, tipo);
  }

  exibirCarta() {
    console.log(`Energia: ${this.nome} | Tipo: ${this.tipo} | Valor: ${this.valor}`);
  }
}