import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotysComponent } from './gotys.component';

describe('GotysComponent', () => {
  let component: GotysComponent;
  let fixture: ComponentFixture<GotysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GotysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GotysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
