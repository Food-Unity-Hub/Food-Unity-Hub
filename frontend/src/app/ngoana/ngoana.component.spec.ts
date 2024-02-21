import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoanaComponent } from './ngoana.component';

describe('NgoanaComponent', () => {
  let component: NgoanaComponent;
  let fixture: ComponentFixture<NgoanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
