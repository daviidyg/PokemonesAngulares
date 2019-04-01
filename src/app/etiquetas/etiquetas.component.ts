import { Component, OnInit, Input } from '@angular/core';
import {Pokemons} from 'src/pokemon'

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.css']
})
export class EtiquetasComponent implements OnInit {
  @Input() pokemon : Pokemons;
  constructor() {
    
   }
   
  ngOnInit() {
  }
  Normal(){
    console.log("patata")
  }
  
  
}
