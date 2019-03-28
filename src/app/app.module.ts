import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtiquetasComponent } from './etiquetas/etiquetas.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { FiltroComponent } from './filtro/filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    EtiquetasComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, EtiquetasComponent, FiltroComponent]
})
export class AppModule { }
