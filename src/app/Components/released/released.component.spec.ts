import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasedComponent } from './released.component';

describe('ReleasedComponent', () => {
  let component: ReleasedComponent;
  let fixture: ComponentFixture<ReleasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
