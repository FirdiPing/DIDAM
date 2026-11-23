import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista',
  styleUrl: './lista.css',
  templateUrl: './lista.html',
})

export class Lista {
  public nombre: string = "IES Playamar";
  public localidad: string = "Torremolinos";
  public familia: string[] = [
    "Informática y Comunicaciones",
    "Transporte y Mantenimiento de Vehículos"
  ];
  public centro: string = "IES PLAYAMAR";
  public img: string = "https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png";

  public cambiarCentro(): void {
    if (this.nombre.match("IES Playamar")) {
      this.nombre = "IES Jacaranda";
      this.localidad = "Churriana";
      this.familia = ["Hostelería y Turismo"];
      this.centro = "IES JACARANDA";
      this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8dVXiKOEMrGw5eXIJa2Du6XPiYlDYFR_-j7N9octNg&s=10";

    } else {
      this.nombre = "IES Playamar";
      this.localidad = "Torremolinos";
      this.familia = ["Informática y Comunicaciones","Transporte y Mantenimiento de Vehículos"];
      this.centro = "IES PLAYAMAR";
      this.img = "https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png";
    }
  }
}


