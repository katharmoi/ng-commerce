import { Subscription } from 'rxjs/Rx';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getProducts()
      .subscribe(products => {
        this.products = products;

        this.intializeDataTable(products);

      });
  }

  private intializeDataTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);

  }

  reloadItems(params){
    if(this.tableResource){
      this.tableResource.query(params)
      .then(items => this.items = items);
    }
  }

  filter(query: string) {
      let filteredProducts = query ?
      this.products.filter(p => (p.title).toLowerCase().includes(query.toLowerCase())) :
      this.products;
    
    this.intializeDataTable(filteredProducts);  

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
