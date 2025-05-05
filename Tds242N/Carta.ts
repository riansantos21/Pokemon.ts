export abstract class Carta {
  constructor(public nome: string, public tipo: string) {}
  abstract exibirCarta(): void;
}