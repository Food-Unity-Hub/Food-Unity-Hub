import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgodonaComponent } from './ngodona.component';

describe('NgodonaComponent', () => {
  let component: NgodonaComponent;
  let fixture: ComponentFixture<NgodonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgodonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgodonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
