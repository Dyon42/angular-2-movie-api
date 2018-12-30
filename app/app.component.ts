import {Component} from 'angular2/core';
import {MovieService} from './services/movie.service'
import {HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/Rx';

// TypeScript Decorator
@Component({
	selector   : 'movie-app',
	templateUrl: 'app/app.component.html',
	styleUrls  : ['app/app.component.css'],
	providers  : [MovieService, HTTP_PROVIDERS]
})

// Controller voor je View.
export class AppComponent {
	movies = [];
	keyword:string;

	constructor(private _movieService:MovieService) {

	}

	searchMovie() {
		console.log(this.keyword);
		// TODO: logica voor ophalen movies via service
		this._movieService.searchMovie(this.keyword)
			.map(movies => movies.json().Search)
			.subscribe(movies => {
					console.log(movies);
				this.movies = movies
				},
				err => console.log('FOUT: ', err),
				() => console.log('Ophalen movies compleet...'))
	}
}
