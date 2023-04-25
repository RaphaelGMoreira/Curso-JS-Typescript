export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Facebook', '11.111.111/0001-11');
const colaborador1 = new Colaborador('luiz', 'otavio');
const colaborador2 = new Colaborador('João', 'otavio');
const colaborador3 = new Colaborador('Jurandi', 'otavio');
empresa1.adionaColaborador(colaborador1);
empresa1.adionaColaborador(colaborador2);
empresa1.adionaColaborador(colaborador3);
console.log(empresa1);

empresa1.mostrarColaboradores();
