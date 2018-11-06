import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawsListComponent } from './draws-list.component';

describe('DrawsComponent', () => {
  let component: DrawsListComponent;
  let fixture: ComponentFixture<DrawsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrawsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
