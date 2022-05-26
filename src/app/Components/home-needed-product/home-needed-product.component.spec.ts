import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNeededProductComponent } from './home-needed-product.component';

describe('HomeNeededProductComponent', () => {
  let component: HomeNeededProductComponent;
  let fixture: ComponentFixture<HomeNeededProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNeededProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNeededProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
