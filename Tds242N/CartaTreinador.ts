import { Carta } from "./Carta";

export class CartaTreinador extends Carta {
  constructor(nome: string, tipo: string, public descricao: string) {
    super(nome, tipo);
  }

  exibirCarta() {
    console.log(`Treinador: ${this.nome} | Tipo: ${this.tipo} | Descrição: ${this.descricao}`);
  }
}