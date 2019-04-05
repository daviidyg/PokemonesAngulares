import { Pipe, PipeTransform } from '@angular/core';
import {Pokemons} from '../pokemon';
@Pipe({
  name: 'tipoP'
})
export class TipoPPipe implements PipeTransform {

  transform(listapokemons: Pokemons[], tipo: string): Pokemons[] {
    let lista = [];
      if (!listapokemons || !tipo) {
          return listapokemons;
      }
      if(tipo=='Home'){
        return listapokemons;
      }
      
      return listapokemons.filter(Pokemons =>{
        if(Pokemons.types[1] != undefined){
          return (Pokemons.types[0].toLowerCase().indexOf(tipo.toLowerCase()) !== -1  || Pokemons.types[1].toLowerCase().indexOf(tipo.toLowerCase()) !== -1);
        }else{
          return Pokemons.types[0].toLowerCase().indexOf(tipo.toLowerCase() ) !== -1;
        }
      }   
      )}
  }
