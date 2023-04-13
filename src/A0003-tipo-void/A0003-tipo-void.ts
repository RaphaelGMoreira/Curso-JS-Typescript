// void -> quando uma função ou metodo não retorna nada
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'luiz',
  sobrenome: 'otavio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('luiz', 'otávio');

pessoa.exibirNome();

export { pessoa };
