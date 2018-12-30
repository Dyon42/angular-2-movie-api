import {Injectable} from "angular2/core";
import {Http} from 'angular2/http';

@Injectable()
export class MovieService{

	constructor(private _http:Http){

	}
	
	searchMovie(keyword){
		let url= `http://www.omdbapi.com/?s=${keyword}&apikey=6d01343e`;
		return this._http.get(url)
	}
}