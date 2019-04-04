import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtiquetasComponent } from './etiquetas/etiquetas.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { FiltroComponent } from './filtro/filtro.component';
import {PokemonFilterPipe} from './etiquetas/pokemon-filter.pipe';
import {FormsModule} from '@angular/forms';
import { TipoPPipe } from './tipo-p.pipe';
@NgModule({
  declarations: [
    AppComponent,
    EtiquetasComponent,
    FiltroComponent,
    PokemonFilterPipe,
    TipoPPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, EtiquetasComponent, FiltroComponent]
})
export class AppModule { }
