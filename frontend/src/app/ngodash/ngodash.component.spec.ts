import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgodashComponent } from './ngodash.component';

describe('NgodashComponent', () => {
  let component: NgodashComponent;
  let fixture: ComponentFixture<NgodashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgodashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgodashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
