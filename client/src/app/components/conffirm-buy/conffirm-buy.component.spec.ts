import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConffirmBuyComponent } from './conffirm-buy.component';

describe('ConffirmBuyComponent', () => {
  let component: ConffirmBuyComponent;
  let fixture: ComponentFixture<ConffirmBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConffirmBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConffirmBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
