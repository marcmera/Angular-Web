import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendProductsComponent } from './add-products.component';

describe('SendProductsComponent', () => {
  let component: SendProductsComponent;
  let fixture: ComponentFixture<SendProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendProductsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SendProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
