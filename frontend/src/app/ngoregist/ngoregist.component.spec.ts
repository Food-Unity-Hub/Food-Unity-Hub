import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoregistComponent } from './ngoregist.component';

describe('NgoregistComponent', () => {
  let component: NgoregistComponent;
  let fixture: ComponentFixture<NgoregistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoregistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoregistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
