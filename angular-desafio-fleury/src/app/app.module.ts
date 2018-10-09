import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { SeudiaComponent } from './seudia/seudia.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';


const appRoutes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'calendar', component: CalendarioComponent },
  { path: 'seudia', component: SeudiaComponent },
  { path: 'objetivos', component: ObjetivosComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    CalendarioComponent,
    SeudiaComponent,
    ObjetivosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
