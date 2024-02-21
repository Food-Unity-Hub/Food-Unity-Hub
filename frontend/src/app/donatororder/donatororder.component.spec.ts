import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatororderComponent } from './donatororder.component';

describe('DonatororderComponent', () => {
  let component: DonatororderComponent;
  let fixture: ComponentFixture<DonatororderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatororderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonatororderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
