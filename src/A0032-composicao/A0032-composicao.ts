export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar() {
    this.motor.acelerar();
  }

  parar() {
    this.motor.parar();
  }

  desligar() {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado');
  }

  acelerar() {
    console.log('Motor está acelerando');
  }

  parar() {
    console.log('Motor está parado');
  }

  desligar() {
    console.log('Motor está desligado');
  }
}

const carro1 = new Carro();
carro1.ligar();
carro1.acelerar();
carro1.parar();
carro1.desligar();
