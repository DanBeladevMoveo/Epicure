import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSearchBarComponent } from './big-search-bar.component';

describe('BigSearchBarComponent', () => {
  let component: BigSearchBarComponent;
  let fixture: ComponentFixture<BigSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
