const objetoA: {
  readonly chaveA: string; // readonly faz com que a chave não seja alterada
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // evitar
} = {
  chaveA: 'Valor A',
  chaveB: 'valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave';
objetoA.chaveE = 'Nova chave';

console.log(objetoA);
