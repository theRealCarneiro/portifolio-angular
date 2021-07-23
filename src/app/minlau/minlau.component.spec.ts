import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinlauComponent } from './minlau.component';

describe('MinlauComponent', () => {
  let component: MinlauComponent;
  let fixture: ComponentFixture<MinlauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinlauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinlauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
