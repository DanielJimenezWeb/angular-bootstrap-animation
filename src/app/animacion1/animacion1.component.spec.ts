import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacion1Component } from './animacion1.component';

describe('Animacion1Component', () => {
  let component: Animacion1Component;
  let fixture: ComponentFixture<Animacion1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Animacion1Component]
    });
    fixture = TestBed.createComponent(Animacion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
