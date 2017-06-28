import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule , JsonpModule} from '@angular/http';
import {Routes , RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SIdYearComponent } from './search/s-id-year/s-id-year.component';
import { SGenreComponent } from './search/s-genre/s-genre.component';


const appRoutes: Routes= [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent,children:[
    {path:'',redirectTo:'genre',pathMatch:'full'},
    {path:'genre',component:SGenreComponent},
    {path:'id/year',component:SIdYearComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SIdYearComponent,
    SGenreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
