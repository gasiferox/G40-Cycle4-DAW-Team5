import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarHomeComponent } from './side-bar-home.component';

describe('SideBarHomeComponent', () => {
  let component: SideBarHomeComponent;
  let fixture: ComponentFixture<SideBarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
