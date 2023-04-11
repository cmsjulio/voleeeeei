import { Task } from 'src/app/Task';
export class Sorteio {
  listaDeJogadores: Task[];
  listaDeTimes: Array<Task[]> = [];

  constructor(listaDeJogadores: Task[]) {
    this.listaDeJogadores = listaDeJogadores;
  }

  public teste(): void {
    console.log('Jogadores:');
    console.log(this.listaDeJogadores);
    console.log('Times:');
    console.log(this.obterNumeroDeTimes(this.listaDeJogadores));

    this.criarTimesVazios(this.obterNumeroDeTimes(this.listaDeJogadores));

    console.log(this.listaDeTimes);
  }

  private obterNumeroDeTimes(jogadores: Task[]): number {
    return Math.trunc(jogadores.length / 4);
  }

  private criarTimesVazios(numeroDeTimes: number): Array<Task[]> {
    for (let i = 0; i < numeroDeTimes; i++) {
      this.listaDeTimes.push([]);
      console.log(this.listaDeTimes[i]);
    }
    return this.listaDeTimes;
  }

  private obterJogadorAleatorioNaoRepetido(listaDeJogadores: Task[]): Task {
    var jogadorAleatorio =
      listaDeJogadores[
        Math.floor(Math.random() * (listaDeJogadores.length - 1))
      ];
    return jogadorAleatorio;
  }
}
