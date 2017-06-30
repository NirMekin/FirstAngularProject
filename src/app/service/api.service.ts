// Observable Version
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { FilmModule } from './film';

@Injectable()
export class APIService {
  private apiURL = 'https://fast-basin-16433.herokuapp.com';  // URL to web API
  constructor (private http: Http) {}

  getAllAPI(): Observable<FilmModule[]> {

    return this.http.get(this.apiURL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getByIdYear(_id,_year): Observable<FilmModule> {

    return this.http.get(`${this.apiURL}/getMoviesByGenre/${_id}/${_year}`)
      .map(this.extractData2)
      .catch(this.handleError);
  }
  getByGenre(_genre:string): Observable<FilmModule[]> {

    return this.http.post(this.apiURL,JSON.stringify({genre:_genre}))
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body.genres);
    return body.genres || { };
  }

  private extractData2(res: Response) {
    let body = res.json();
    console.log(body.movies);
    return body.movies || { name:"Not Valid"};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
