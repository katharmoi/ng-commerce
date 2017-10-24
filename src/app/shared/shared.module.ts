import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-4-data-table/dist';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation/dist';
import { AuthGuard } from 'shared/services/auth-guard.service';

import { ProductAddRemoveComponent } from './components/product-add-remove/product-add-remove.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import {MatCheckboxModule, MatCardModule, MatIconModule, MatButtonModule,MatGridListModule,MatTabsModule} from '@angular/material';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    NgbModule.forRoot(),
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    ProductCardComponent,
    ProductAddRemoveComponent
  ],
  exports: [
    ProductCardComponent,
    ProductAddRemoveComponent,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    NgxGalleryModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
