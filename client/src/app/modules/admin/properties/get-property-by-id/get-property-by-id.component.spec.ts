import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPropertyByIdComponent } from './get-property-by-id.component';

describe('GetPropertyByIdComponent', () => {
  let component: GetPropertyByIdComponent;
  let fixture: ComponentFixture<GetPropertyByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPropertyByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPropertyByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
