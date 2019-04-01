import { Component, OnInit } from '@angular/core';
import { ServicioService} from './../servicio.service'
import {Pokemons} from 'src/pokemon'

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.css']
})
export class EtiquetasComponent implements OnInit {
  public listapokemons: Pokemons[];
  constructor(private _servicio:ServicioService) {
    
   }
   
  ngOnInit() {
    this.getPokemon()
  }
  getPokemon(){
    this._servicio.getPokimons().subscribe(
      Pokemons => this.listapokemons=Pokemons
    )
  }
  Normal(){
    console.log("patata")
  }
  
  
}
