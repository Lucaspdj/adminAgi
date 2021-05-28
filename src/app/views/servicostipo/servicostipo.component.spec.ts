import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicostipoComponent } from './servicostipo.component';

describe('ServicostipoComponent', () => {
  let component: ServicostipoComponent;
  let fixture: ComponentFixture<ServicostipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicostipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicostipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
