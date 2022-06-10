import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDirComponent } from './switch-dir.component';

describe('SwitchDirComponent', () => {
  let component: SwitchDirComponent;
  let fixture: ComponentFixture<SwitchDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
