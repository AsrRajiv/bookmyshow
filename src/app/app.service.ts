import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as MoviesList from "../assets/landing-page/movies-list.json";

@Injectable()
export class AppService {

    constructor(
        private httpClient: HttpClient
    ) {}


    getMoviesList() {
        return MoviesList['default'];
    }

    getEmployeeDetails() {
        return this.httpClient.get("https://dummy.restapiexample.com/api/v1/employees");
    }

}