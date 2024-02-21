import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestregisComponent } from './restregis.component';

describe('RestregisComponent', () => {
  let component: RestregisComponent;
  let fixture: ComponentFixture<RestregisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestregisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestregisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
