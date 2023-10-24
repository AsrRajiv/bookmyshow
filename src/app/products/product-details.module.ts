import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './container/products-detail.component';
import { ProductDetailsService } from './product-details.service';
import { ReviewComponent } from './reviews/review.component';
import { AuthenticationGuard } from 'src/core/guards/authentication.guard';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ReviewComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductDetailComponent,
        canActivateChild: [AuthenticationGuard],
        children: [
          {
            path: 'reviews',
            component: ReviewComponent
          }
        ]
      }
    ])
  ],
  providers: [ProductDetailsService],
  bootstrap: []
})
export class ProductDetailModule { }
