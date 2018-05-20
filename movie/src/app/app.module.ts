import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HotShowingComponent } from './hot-showing/hot-showing.component';
import { MovieServiceService } from './movie-service.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';

const routeConfig:Routes =[
  {path: '',component:HomeComponent},
  {path:'movies/:movieId',component: MovieDetailComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    HotShowingComponent,
    CarouselComponent,
    MovieDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
