import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfDirComponent } from './if-dir.component';

describe('IfDirComponent', () => {
  let component: IfDirComponent;
  let fixture: ComponentFixture<IfDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
