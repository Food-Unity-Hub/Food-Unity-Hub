import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoproComponent } from './ngopro.component';

describe('NgoproComponent', () => {
  let component: NgoproComponent;
  let fixture: ComponentFixture<NgoproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
