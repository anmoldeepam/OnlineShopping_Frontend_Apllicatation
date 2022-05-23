import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOfferComponent } from './top-offer.component';

describe('TopOfferComponent', () => {
  let component: TopOfferComponent;
  let fixture: ComponentFixture<TopOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
