import { Component, OnInit } from '@angular/core';
import { Movies } from './app.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sampleapp';
  childTitle: string = "";
  moviesList: Movies[] = [];

  constructor(
    private appService: AppService
  ) {

  }

  ngOnInit(): void {
    this.moviesList = this.appService.getMoviesList();
    let employeeDetails$ = this.appService.getEmployeeDetails();
    employeeDetails$.subscribe((res) => {
      console.log('Response -->', res);
    })
  }
}
