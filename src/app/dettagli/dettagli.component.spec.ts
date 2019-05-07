import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliComponent } from './dettagli.component';

describe('DettagliComponent', () => {
  let component: DettagliComponent;
  let fixture: ComponentFixture<DettagliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
