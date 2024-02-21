import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestsettComponent } from './restsett.component';

describe('RestsettComponent', () => {
  let component: RestsettComponent;
  let fixture: ComponentFixture<RestsettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestsettComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestsettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
