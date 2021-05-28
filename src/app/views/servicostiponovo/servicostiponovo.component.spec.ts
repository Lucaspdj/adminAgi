import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicostiponovoComponent } from './servicostiponovo.component';

describe('ServicostiponovoComponent', () => {
  let component: ServicostiponovoComponent;
  let fixture: ComponentFixture<ServicostiponovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicostiponovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicostiponovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
