import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pokemons} from 'src/pokemon'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private urls = 'http://localhost:3000/pokemons';
  public listapokemons: Pokemons[];

  constructor(public http: HttpClient) { 
    
  }
  getPokimons(): Observable<Pokemons[]>{
    return this.http.get<Pokemons[]>(this.urls);
}
}
