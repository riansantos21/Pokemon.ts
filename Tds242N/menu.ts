import { CartaPokemon } from "./CartaPokemon";
import { CartaEnergia } from "./CartaEnergia";
import { CartaTreinador } from "./CartaTreinador";
import { CartaDeItem } from "./CartaDeItem";
import { Baralho } from "./Baralho";
import { Tabuleiro } from "./Tabuleiro";
import { Carta } from "./Carta";

const cartasIniciais: Carta[] = [
  new CartaPokemon("Charmander", "Fogo", 40, 50),
  new CartaEnergia("Energia Fogo", "Fogo", 10),
  new CartaTreinador("Professor Carvalho", "Normal", "Compre 3 cartas"),
  new CartaDeItem("Poção", "Normal", "Cure 20 de HP"),
  new CartaPokemon("Squirtle", "Água", 30, 60),
  new CartaEnergia("Energia Água", "Água", 10),
  new CartaTreinador("Treinadora Ana", "Normal", "Revise o baralho"),
];

const baralho = new Baralho(cartasIniciais);
const tabuleiro = new Tabuleiro();

for (let turno = 1; turno <= 3; turno++) {
  console.log(`\n===== 🎲 Turno ${turno} =====`);

  const cartaComprada = baralho.comprarCarta();
  if (cartaComprada) {
    tabuleiro.adicionarCartaMao(cartaComprada);
  }

  const maoAtual = tabuleiro.getMao();
  for (const carta of maoAtual) {
    if (carta instanceof CartaEnergia || carta instanceof CartaTreinador) {
      tabuleiro.descartarCarta(carta);
      break;
    }
  }

  tabuleiro.exibirMao();
  tabuleiro.exibirDescarte();
  baralho.exibirPilha();
}