import { Component } from "@angular/core";

@Component  ({
  selector: 'app-contador',
  template: `
  <h1>Hola {{title}}</h1>
  <hr>
  <nav>
  <h3>Contador: {{contador}}</h3>
    <button (click)="decrementarContador()">-5</button>
    <button (click)="resetContador()">Reset</button>
    <button (click)="incrementarContador()">+5</button>
  </nav>`,
  styleUrl:'../app.css',
  standalone: true
})
export class ContadorComponent{
  protected title:string = "Firdaus";
  public contador: number=10;
  public numero: number=5;

  incrementarContador(): void {
    this.contador += this.numero;
  }

  decrementarContador(): void {
    this.contador -= this.numero;
  }

  resetContador(): void {
    this.contador = 0;
  }
}
