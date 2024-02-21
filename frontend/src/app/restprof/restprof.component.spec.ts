import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestprofComponent } from './restprof.component';

describe('RestprofComponent', () => {
  let component: RestprofComponent;
  let fixture: ComponentFixture<RestprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestprofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
