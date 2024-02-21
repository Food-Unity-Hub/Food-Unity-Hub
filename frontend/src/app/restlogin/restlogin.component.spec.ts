import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestloginComponent } from './restlogin.component';

describe('RestloginComponent', () => {
  let component: RestloginComponent;
  let fixture: ComponentFixture<RestloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
