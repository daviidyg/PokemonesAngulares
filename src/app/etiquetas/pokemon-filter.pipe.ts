import {Pipe, PipeTransform} from '@angular/core';
import {Pokemons} from '../../pokemon';


@Pipe({
    name: 'PokemonFilterPipe'
})

    /* export class FilterPipe implements PipeTransform {
        transform(items: any[], searchText: string): any[] {
          if(!items) return [];
          if(!searchText) return items;
      searchText = searchText.toLowerCase();
      return items.filter( it => {
            return it.toLowerCase().includes(searchText);
          });
         } */
         export class PokemonFilterPipe implements PipeTransform {
            transform(listapokemons: Pokemons[], search: string): Pokemons[] {
                if (!listapokemons || !search) {
                    return listapokemons;
                }
                return listapokemons.filter(Pokemons =>
                    Pokemons.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
                }
                    

            }
        

            /* transform (listapokemons: any[], search: string): any {
              if(!listapokemons) return[];
              if(!search) return listapokemons;
              search = search.toLowerCase();
              return listapokemons.filter( it => {
                return it.toLowerCase().includes(search);
              });
            };
           */

