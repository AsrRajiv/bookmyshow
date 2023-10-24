import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../../app.model';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  movieId: number = 0;
  movieDetails: Movies;

  constructor(
    private productService: ProductDetailsService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      console.log('params -->', res);
    });
    this.movieId = Number(this.activatedRoute.snapshot.paramMap.get("movieId"));
    this.movieDetails = this.productService.getProductDetailsById(this.movieId);
    console.log('movieDetails -->', this.movieDetails);
    this.productService.getEmployeeDetailsById(1).subscribe((res) => {
      console.log('subscribe -->', res);
    });
  }
}