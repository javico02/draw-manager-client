import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawListItemComponent } from './draw-list-item.component';

describe('DrawListItemComponent', () => {
  let component: DrawListItemComponent;
  let fixture: ComponentFixture<DrawListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
