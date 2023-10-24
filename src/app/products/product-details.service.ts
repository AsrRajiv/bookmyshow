import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as MoviesList from '../../assets/landing-page/movies-list.json';
import { Movies } from "../app.model";


@Injectable()
export class ProductDetailsService {

    constructor(
        private httpClient: HttpClient
    ) { }


    getProductDetailsById(id: number) {
        console.log('Movie id in service -->', id);
        console.log('JSON STATIC -->', MoviesList);
        let moviesCollection = MoviesList['default'].moviesList;
        console.log('moviesCollection -->', moviesCollection);
        moviesCollection = moviesCollection.filter((m: Movies) => m.id === id);
        return moviesCollection.length > 0 ? moviesCollection[0] : {};
    }

    getEmployeeDetailsById(id: number) {
        return this.httpClient.get("https://dummy.restapiexample.com/api/v1/employee/" + id);
    }
}
