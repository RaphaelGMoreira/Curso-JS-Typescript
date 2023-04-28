// interface TipoPessoa {
//   nome: string;
//   sobrenome: string;
//   nomeCompleto: () => string;
// }

interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto: () => string;
}

interface TipoPessoa extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

// export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
//   constructor(public nome: string, public sobrenome: string) {}

//   nomeCompleto(): string {
//     return this.nome + ' ' + this.sobrenome;
//   }
// }

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());
