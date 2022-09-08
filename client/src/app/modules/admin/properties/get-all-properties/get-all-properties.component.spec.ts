import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPropertiesComponent } from './get-all-properties.component';

describe('GetAllPropertiesComponent', () => {
  let component: GetAllPropertiesComponent;
  let fixture: ComponentFixture<GetAllPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
