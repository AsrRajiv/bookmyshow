import { Component, OnInit } from '@angular/core';
import { Movies } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
    });
    localStorage.setItem("userId", "256");
    localStorage.setItem("username", "sabari");
  }

  // Event emitter method
  displayChildEmitter(event) {
    console.log(event);
    this.childTitle = event.text;
    this.title = event.text;
  }
}
