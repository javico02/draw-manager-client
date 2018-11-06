import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeListItemComponent } from './prize-list-item.component';

describe('PrizeListItemComponent', () => {
  let component: PrizeListItemComponent;
  let fixture: ComponentFixture<PrizeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
