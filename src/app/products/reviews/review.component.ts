import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from '../product-details.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  movieId: number = 0;


  constructor(
    private productService: ProductDetailsService,
  ) {

  }

  ngOnInit(): void {
 
  }
}