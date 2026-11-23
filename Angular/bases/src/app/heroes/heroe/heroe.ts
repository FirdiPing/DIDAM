import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-heroe',
  styleUrl: './heroe.css',
  templateUrl: './heroe.html',
})
export class Heroe {
  public nombre:string ="Goku";
  public edad:number =33;

  public get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  public getDescripcionHeroe():string{
    return `${this.nombre} - ${this.edad}`;
  }

  private getNombrePrivado(): string {
    return 'Kakarot';
  }

  public cambiarNombre(): void{
    this.nombre='Vegeta';
  }

  public cambiarEdad(): void{
    this.edad=this.edad+1;
  }

  public reset():void{
    this.edad=33;
    this.nombre='Goku';
  }
}
