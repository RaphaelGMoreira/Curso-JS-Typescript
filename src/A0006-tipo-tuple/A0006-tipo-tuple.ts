// Tuple
const dadosCliente1: [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'miranda'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Raphael';
console.log(dadosCliente1);

dadosCliente2[0] = 200;
dadosCliente2[1] = 'Raphael';
dadosCliente2[2] = 'Moreira';
console.log(dadosCliente2);

dadosCliente3[0] = 300;
dadosCliente3[1] = 'Raphael';
dadosCliente3[2] = 'Moreira';
console.log(dadosCliente3);

dadosCliente4[0] = 400;
dadosCliente4[1] = 'Raphael';
dadosCliente4[2] = 'Moreira';
console.log(dadosCliente4);
