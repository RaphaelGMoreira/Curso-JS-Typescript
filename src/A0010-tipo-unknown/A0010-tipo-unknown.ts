// unknown é um any, só que mais seguro
let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = '10';
const y = 800;

// console.log(x + y);

if (typeof x !== 'number') {
  console.log('Precisa ser um numero');
} else {
  console.log(x + y);
}
