import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsPageComponent } from './resturants-page.component';

describe('ResturantsPageComponent', () => {
  let component: ResturantsPageComponent;
  let fixture: ComponentFixture<ResturantsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
