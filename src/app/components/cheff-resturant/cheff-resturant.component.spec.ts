import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheffResturantComponent } from './cheff-resturant.component';

describe('CheffResturantComponent', () => {
  let component: CheffResturantComponent;
  let fixture: ComponentFixture<CheffResturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheffResturantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheffResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
