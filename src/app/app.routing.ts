import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from "./weather/weather.component";
import { MovieComponent } from "./movie/movie.component";
import { HomeComponent } from './home/home.component';


const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', component: HomeComponent},
    { path: 'weather', component: WeatherComponent },
    { path: 'movie', component: MovieComponent },
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);