import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http';
import { DettagliComponent } from './dettagli/dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DettagliComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
