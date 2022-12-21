import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryPageComponent } from './recovery-page.component';

describe('RecoveryPageComponent', () => {
  let component: RecoveryPageComponent;
  let fixture: ComponentFixture<RecoveryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
