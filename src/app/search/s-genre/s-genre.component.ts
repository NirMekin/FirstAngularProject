import { Component, OnInit } from '@angular/core';
import {FilmModule} from '../../service/film';
import {APIService} from '../../service/api.service';
import {NgForm} from '@angular/forms';
import {isUndefined} from "util";

@Component({
  selector: 'app-s-genre',
  templateUrl: './s-genre.component.html',
  providers:[APIService],
  styleUrls: ['./s-genre.component.css']
})
export class SGenreComponent implements OnInit {
  _disabled:boolean=false;
  _genre:string;
  films:FilmModule;

  constructor(private apiService : APIService) { }

  ngOnInit() {
  }

  onSubmited(form:NgForm){
    this._genre=form.value.genreInput;
  }

}
