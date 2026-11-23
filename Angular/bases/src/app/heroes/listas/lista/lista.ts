
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//Clase centro
interface Centro {
  logo: string;
  nombre: string;
  localidad: string;
  ciclos: string[];
}


@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})

export class Lista {

  //Insertamos datos
  centros: Centro[] = [
    {
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSqTIqrvPRf9yFpm3gRzCiPgy2qRPwqXDXAd6k1R_vw&s=10',
      nombre: 'IES Al-Ándalus',
      localidad: 'Málaga',
      ciclos: ['DAW', 'DAM', 'ASIR']
    },
    {
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCzSvrIpD0rgpWgO_BsnfDtODBN0GwbtC1uxCeKDG5w&s=10',
      nombre: 'IES Politécnico Jesús Marín',
      localidad: 'Málaga',
      ciclos: ['DAW', 'DAM', 'SMR']
    },
    {
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6uyMt21F0Xui1ichAJUjPsZuNxqoB_pGKvXCWF9r2ew&s=10',
      nombre: 'IES Los Manantiales',
      localidad: 'Torremolinos',
      ciclos: ['Administración y Finanzas', 'Gestión Administrativa']
    },
    {
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0jWehmx93KAKnNpHuwsq2XjOqrKPpHaOMHsw61i2Xw&s=10',
      nombre: 'IES Playamar',
      localidad: 'Torremolinos',
      ciclos: ['DAW', 'SMR']
    },
    {
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tb4bD0J3r19fgd2Z4N_n99FwNLjAu_EoyWsgO7WXiw&s=10',
      nombre: 'IES La Rosaleda',
      localidad: 'Málaga',
      ciclos: ['DAM', 'DAW', 'ASIR']
    }
  ];


  posicion: number = 0;

  //Centro actual
  get centroActual(): Centro | undefined {
    return this.centros[this.posicion];
  }

  //Boton anterior
  anterior(): void {
      this.posicion--;
  }

  //Botón posterior
  posterior(): void {
      this.posicion++;
  }

  //Centros eliminados
  pila: Centro[] = [];

  //Botón para eliminar
  eliminar(): void {

    // Sacamos el centro del listado
    const eliminado = this.centros.splice(this.posicion, 1)[0];

    // Lo guardamos en la pila
    this.pila.push(eliminado);

    // Ajustamos la posición
    if (this.posicion >= this.centros.length) {
      this.posicion = Math.max(0, this.centros.length - 1);
    }
  }

  //Botón para insertar
  insertar(): void {

    // Sacamos el último centro de la pila
    const recuperado = this.pila.pop()!;

    // Lo insertamos en la posición actual
    this.centros.splice(this.posicion, 0, recuperado);
  }

}
