import { Component, OnInit, Input } from '@angular/core';
import {Pokemons} from 'src/pokemon';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.css']
})
export class EtiquetasComponent implements OnInit {
  
  @Input() pokemon: Pokemons;
  constructor() {
   }
  ngOnInit() {
  }
  DatosModal(i,vida, ataque, defensa, speed) {
    if (isNaN(vida)) {
    }
    else{
      this.pokemon.hp = vida;
    }
    if (isNaN(ataque)) {
    }
    else{
      this.pokemon.attack = ataque;
    }
    if (isNaN(defensa)) {
    }
    else{
      this.pokemon.defense = defensa;
    }
    if (isNaN(speed)) {
    }
    else{
      this.pokemon.speed = speed;

    }
  }
}
