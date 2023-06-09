export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Fazendo Algo Antes');
    const result = super.getNomeCompleto();
    return result + ' Heyyyy!! ';
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Natanael', 'Miranda', 29, '111.111.111-10');
const aluno = new Aluno('Luiz', 'Miranda', 30, '111.111.111-11', '0001');
const cliente = new Cliente('joao', 'Miranda', 31, '111.111.111-12');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
