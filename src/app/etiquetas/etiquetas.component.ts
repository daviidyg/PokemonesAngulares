import { Component, OnInit, Input } from '@angular/core';
import {Pokemons} from 'src/pokemon';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.css']
})
export class EtiquetasComponent implements OnInit {
  ataque = 0;
  vida = 0;
  speed = 0;
  defensa = 0;
  @Input() pokemon: Pokemons;
  constructor() {
   }
  ngOnInit() {
  }
  DatosModal(vida, ataque, defensa, speed) {
    if (vida === this.pokemon.hp ) {
      vida = this.pokemon.hp;
    }
    if (ataque === this.pokemon.attack ) {
      ataque = this.pokemon.attack;
    }
    if (defensa === this.pokemon.defense) {
      defensa = this.pokemon.defense;
    }
    if (speed === this.pokemon.speed) {
      speed = this.pokemon.speed;
    }
    this.pokemon.hp = vida;
    this.pokemon.attack = ataque;
    this.pokemon.defense = defensa;
    this.pokemon.speed = speed;
  }
}
