import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pokemons} from 'src/pokemon'
@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.css']
})
export class EtiquetasComponent implements OnInit {
  private urls = 'http://localhost:3000/pokemons';
  public listapokemons: Pokemons[];
  private temparray = [];
  constructor(public http: HttpClient) {
    
   }
   
  ngOnInit() {
    this.getPokimons()
  }
  private getPokimons(){
    const url = '${this.urls}';
    return this.http.get(this.urls)
    .subscribe((res : any[]) => {
      console.log(res);
      this.temparray = res;
      this.listapokemons = res;
      console.log(this.listapokemons)
    });
  }
  
}
