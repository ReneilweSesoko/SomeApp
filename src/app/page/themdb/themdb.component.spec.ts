import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemdbComponent } from './themdb.component';

describe('ThemdbComponent', () => {
  let component: ThemdbComponent;
  let fixture: ComponentFixture<ThemdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
