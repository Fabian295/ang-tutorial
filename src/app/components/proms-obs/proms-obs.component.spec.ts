import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromsObsComponent } from './proms-obs.component';

describe('PromsObsComponent', () => {
  let component: PromsObsComponent;
  let fixture: ComponentFixture<PromsObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromsObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromsObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
