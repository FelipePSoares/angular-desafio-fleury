import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { SeudiaComponent } from './seudia/seudia.component';


const appRoutes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'calendar', component: CalendarioComponent },
  { path: 'seudia', component: SeudiaComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    CalendarioComponent,
    SeudiaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
