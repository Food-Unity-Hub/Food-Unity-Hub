import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestdataComponent } from './restdata.component';

describe('RestdataComponent', () => {
  let component: RestdataComponent;
  let fixture: ComponentFixture<RestdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
