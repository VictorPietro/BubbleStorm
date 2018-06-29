import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistergameComponent } from './registergame.component';

describe('RegistergameComponent', () => {
  let component: RegistergameComponent;
  let fixture: ComponentFixture<RegistergameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistergameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistergameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
