import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePageComponent } from './change-page.component';

describe('ChangePageComponent', () => {
  let component: ChangePageComponent;
  let fixture: ComponentFixture<ChangePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
