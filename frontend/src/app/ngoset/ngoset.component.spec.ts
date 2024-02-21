import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgosetComponent } from './ngoset.component';

describe('NgosetComponent', () => {
  let component: NgosetComponent;
  let fixture: ComponentFixture<NgosetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgosetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgosetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
