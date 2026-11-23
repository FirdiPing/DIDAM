import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lista } from './listas/lista/lista';
import { Heroe } from './heroe/heroe';

@NgModule({
  declarations: [],
  imports: [CommonModule, Lista, Heroe],
  exports:[Lista, Heroe]
})

export class HeroesModule { }
