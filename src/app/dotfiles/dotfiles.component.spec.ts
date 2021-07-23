import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotfilesComponent } from './dotfiles.component';

describe('DotfilesComponent', () => {
  let component: DotfilesComponent;
  let fixture: ComponentFixture<DotfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
