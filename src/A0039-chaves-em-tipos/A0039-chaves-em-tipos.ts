type Veiculo = {
  marca: string;
  ano: number;
};

type car = {
  brand: Veiculo['marca'];
  yaer: Veiculo['ano'];
  name: string;
};

const carro: car = {
  brand: 'ford',
  yaer: 2020,
  name: 'Ford K',
};

console.log(carro);
