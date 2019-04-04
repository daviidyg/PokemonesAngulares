import { Component } from '@angular/core';
import { ServicioService} from './servicio.service';
import {Pokemons} from 'src/pokemon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';
  public listapokemons: Pokemons[];
  search = '';
  constructor(private _servicio:ServicioService) {
    
   }
  ngOnInit() {
    this.getPokemon()
    console.log(this.getPokemon());
  }
  getPokemon(){
    this._servicio.getPokimons().subscribe(
      Pokemons => this.listapokemons=Pokemons
    )
  }
}
