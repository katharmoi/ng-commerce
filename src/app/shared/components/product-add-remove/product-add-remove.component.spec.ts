import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddRemoveComponent } from './product-add-remove.component';

describe('ProductAddRemoveComponent', () => {
  let component: ProductAddRemoveComponent;
  let fixture: ComponentFixture<ProductAddRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
