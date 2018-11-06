import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizesListComponent } from './prizes-list.component';

describe('PrizesListComponent', () => {
  let component: PrizesListComponent;
  let fixture: ComponentFixture<PrizesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
