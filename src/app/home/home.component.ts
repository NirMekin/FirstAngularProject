import { Component, OnInit } from '@angular/core';
import {APIService} from '../service/api.service';
import {FilmModule} from '../service/film';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers:[APIService],
  styleUrls: ['./home.component.css','../app.component.css']
})
export class HomeComponent implements OnInit {
  films : FilmModule[];
  errorMessage: string;

  constructor(private apiService : APIService) { }

  ngOnInit() {
      this.apiService.getAllAPI()
        .subscribe(
          _film => {this.films = _film; console.log(this.films)},
          error => this.errorMessage = <any>error
        );
  }




}
