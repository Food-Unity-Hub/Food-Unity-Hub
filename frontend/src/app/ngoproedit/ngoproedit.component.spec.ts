import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoproeditComponent } from './ngoproedit.component';

describe('NgoproeditComponent', () => {
  let component: NgoproeditComponent;
  let fixture: ComponentFixture<NgoproeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoproeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoproeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
