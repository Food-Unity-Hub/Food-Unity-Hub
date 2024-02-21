import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorprofComponent } from './donatorprof.component';

describe('DonatorprofComponent', () => {
  let component: DonatorprofComponent;
  let fixture: ComponentFixture<DonatorprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatorprofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonatorprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
