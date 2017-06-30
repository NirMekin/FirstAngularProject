import { Component, OnInit, EventEmitter,Input,Output } from '@angular/core';
import {FilmModule} from '../../service/film';
import {APIService} from '../../service/api.service';
import {NgForm} from '@angular/forms';
import {isUndefined} from "util";

@Component({
  selector: 'app-s-id-year',
  templateUrl: './s-id-year.component.html',
  providers:[APIService],
  styleUrls: ['./s-id-year.component.css']
})
export class SIdYearComponent implements OnInit {
  @Output () idAdded = new EventEmitter<number>();
  _disabled:boolean=false;
  _test:boolean=false;
  _id:number;
  _year:string;
  films:FilmModule;


  constructor(private apiService : APIService) { }

  ngOnInit() {
  }

  onSubmited(form:NgForm){

    this._id=form.value.idInput;
    this._year=form.value.yearInput;

    this.apiService.getByIdYear(this._id,this._year)
      .subscribe(
        _films=>{this.films= _films;
        if (isUndefined(this.films[0])){
          this._disabled=false;
          this._test=true;
        }
        else{
          this._test=false;
          this._disabled=true;
        } },
        err=>{
          this._disabled=false;
          this._test=true;
          console.log("Error MSG:\n"+err);
        }
      );
  }

}
