import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComponent } from './crud.component';

describe('SideBarComponent', () => {
  let component:CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
