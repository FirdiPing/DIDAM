import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lista } from './lista/lista';

@Component({
  imports: [RouterOutlet, Lista],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
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
