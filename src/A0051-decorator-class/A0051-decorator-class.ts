@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

// function decorator(target: any): any {
//   console.log('Decorator');
//   return target;
// }

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Decorator');
  return class extends target {
    cor: string;
    nome: string;

    // constructor(...args: any[]) {
    //   super(...args);
    //   // this.cor = 'qualquer coisa';
    //   this.cor = args[0].split('').reverse().join('');
    // }

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Luiz', 'Roxo');
console.log(animal);
