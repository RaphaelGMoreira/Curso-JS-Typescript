// Record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'miranda',
  idade: 30,
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required = tudo obrigatório
type PessoaRequired = Required<PessoaProtocol>;

// Required = tudo opcional
type PessoaPartial = Partial<PessoaRequired>;

// Readonly
type PessoaReadonly = Readonly<PessoaPartial>;

// Pick
type PessoaPick = Pick<PessoaReadonly, 'nome' | 'sobrenome'>;

const objeto2: PessoaPick = {
  nome: 'Luiz',
  sobrenome: 'miranda',
  // idade: 30,
};

console.log(objeto2);

// Extract e Exclude
// type ABC = 'A' | 'B' | 'C';
// type CDE = 'C' | 'D' | 'E';
// type TipoExlude = Exclude<ABC, CDE>;
// type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'adsjdhnasjdbnasfnalkis',
  nome: 'luiz',
  idade: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const AccountApi = mapAccount(accountMongo);
console.log('API');
console.log(AccountApi);

// Module mode
export default 1;
