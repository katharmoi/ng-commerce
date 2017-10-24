import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product ={};
  id;
  constructor(categoryService: CategoryService, 
    private productService: ProductService,
    private router: Router,
    private cameFrom:ActivatedRoute) {
    this.categories$ = categoryService.getCategories();
    this.id = this.cameFrom.snapshot.paramMap.get('id');
    if(this.id){
      this.productService.getProduct(this.id)
      .take(1)
      .subscribe(product => {
        this.product = product;
      });
    }
   }

   save(product){
     if(this.id) this.productService.updateProduct(this.id,product);
     else this.productService.save(product);
     this.router.navigate(['/admin/products']);
   }

   delete(){
     if(confirm('Are you sure you want to delete this product')){
      this.productService.deleteProduct(this.id);
      this.router.navigate(['/admin/products']);
     }
     
   }

  ngOnInit() {
  }

}
