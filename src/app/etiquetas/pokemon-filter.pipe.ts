import {Pipe, PipeTransform} from '@angular/core';
import {Pokemons} from '../../pokemon';


@Pipe({
    name: 'PokemonFilterPipe'
})
export class PokemonFilterPipe implements PipeTransform {
    transform(listapokemons: Pokemons[], search: string): Pokemons[] {
        if (!listapokemons || !search) {
            return listapokemons;
        }
        return listapokemons.filter(Pokemons =>
            Pokemons.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
}
