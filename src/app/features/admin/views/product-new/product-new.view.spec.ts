import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewView } from './product-new.view';

describe('ProductNewView', () => {
  let component: ProductNewView;
  let fixture: ComponentFixture<ProductNewView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNewView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNewView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
