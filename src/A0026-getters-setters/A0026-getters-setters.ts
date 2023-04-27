export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string, // private cpf: string,
  ) {}

  // como é feito hj
  set cpf(valor: string) {
    console.log('Setter chamado');
    this._cpf = valor;
  }

  get cpf(): string {
    console.log('Getter chamado');
    return this._cpf.replace(/\D/g, '');
  }

  // Maneira antigo
  // setCpf(valor: string): void {
  //   this.cpf = valor;
  // }

  // getCpf(): string {
  //   return this.cpf.replace(/\D/g, '');
  // }
}

const pessoa = new Pessoa('Natanael', 'Miranda', 29, '111.111.111-10');
pessoa.cpf = '111.111.111-23';
console.log(pessoa.cpf);

// Modo antigo
// pessoa.setCpf('111.111.111-23');
// console.log(pessoa.getCpf());
