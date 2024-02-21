import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestdonationComponent } from './restdonation.component';

describe('RestdonationComponent', () => {
  let component: RestdonationComponent;
  let fixture: ComponentFixture<RestdonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestdonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestdonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
