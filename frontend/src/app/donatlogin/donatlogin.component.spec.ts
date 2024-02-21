import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatloginComponent } from './donatlogin.component';

describe('DonatloginComponent', () => {
  let component: DonatloginComponent;
  let fixture: ComponentFixture<DonatloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonatloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
