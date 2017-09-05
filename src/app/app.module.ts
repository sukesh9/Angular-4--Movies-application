import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie.service';
import { WeatherComponent } from './weather/weather.component';
import { CONST_ROUTING } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    WeatherComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
