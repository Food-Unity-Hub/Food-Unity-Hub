import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgodataComponent } from './ngodata.component';

describe('NgodataComponent', () => {
  let component: NgodataComponent;
  let fixture: ComponentFixture<NgodataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgodataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
