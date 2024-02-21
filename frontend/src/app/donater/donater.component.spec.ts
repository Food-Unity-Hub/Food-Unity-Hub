import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaterComponent } from './donater.component';

describe('DonaterComponent', () => {
  let component: DonaterComponent;
  let fixture: ComponentFixture<DonaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
