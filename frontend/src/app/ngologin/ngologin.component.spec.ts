import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgologinComponent } from './ngologin.component';

describe('NgologinComponent', () => {
  let component: NgologinComponent;
  let fixture: ComponentFixture<NgologinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgologinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
