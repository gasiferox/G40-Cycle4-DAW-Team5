import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLocationByIdComponent } from './get-location-by-id.component';

describe('GetLocationByIdComponent', () => {
  let component: GetLocationByIdComponent;
  let fixture: ComponentFixture<GetLocationByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLocationByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLocationByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
