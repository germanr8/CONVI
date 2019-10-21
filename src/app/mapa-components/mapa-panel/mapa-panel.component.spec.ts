import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaPanelComponent } from './mapa-panel.component';

describe('MapaPanelComponent', () => {
  let component: MapaPanelComponent;
  let fixture: ComponentFixture<MapaPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
