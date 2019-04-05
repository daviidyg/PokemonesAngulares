import { Component, OnInit, Input } from '@angular/core';
import {Pokemons} from 'src/pokemon';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.css']
})
export class EtiquetasComponent implements OnInit {
  posicionarray = 0;
  @Input() pokemon: Pokemons;
  constructor() {
   }
  ngOnInit() {
  }
  DatosModal(id) {
     this.posicionarray = id;
  }
}
