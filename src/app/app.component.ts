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
  tipo = '';
  opcion = '';
  checkboxValue=false;
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
  Tipos(types){
    this.tipo=types;
  }
  Opcion(op){
     let sorted = this.listapokemons.sort((a, b) => a[op] < b[op] ? 1 : a[op] === b[op] ? 0 : -1);
    // asc/desc
    if (op.charAt(0) === '-') { sorted.reverse(); }
    return sorted;
  }
}
