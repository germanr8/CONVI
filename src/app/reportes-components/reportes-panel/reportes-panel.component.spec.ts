import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesPanelComponent } from './reportes-panel.component';

describe('ReportesPanelComponent', () => {
  let component: ReportesPanelComponent;
  let fixture: ComponentFixture<ReportesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
