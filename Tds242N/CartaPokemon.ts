import { Carta } from "./Carta";

export class CartaPokemon extends Carta {
  constructor(nome: string, tipo: string, public ataque: number, public hp: number) {
    super(nome, tipo);
  }

  exibirCarta() {
    console.log(`Pokémon: ${this.nome} | Tipo: ${this.tipo} | Ataque: ${this.ataque} | HP: ${this.hp}`);
  }
}