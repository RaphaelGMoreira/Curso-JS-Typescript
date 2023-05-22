// eslint-disable-next-line
namespace MeuNameSpace {
  export const nomeDoNamespace = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace('Luiz');
  console.log(pessoaDoNamespace);

  // eslint-disable-next-line
  export namespace OutroNameSpace {
    export const nomeDoNamespace = 'Maria';
  }
}

const pessoaDoNamespace = new MeuNameSpace.PessoaDoNamespace('Luiz');
console.log(pessoaDoNamespace);
console.log(MeuNameSpace.nomeDoNamespace);
console.log(MeuNameSpace.OutroNameSpace.nomeDoNamespace);
