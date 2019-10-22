import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmberPanelComponent } from './amber-panel.component';

describe('AmberPanelComponent', () => {
  let component: AmberPanelComponent;
  let fixture: ComponentFixture<AmberPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmberPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmberPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
