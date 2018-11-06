import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawEditorComponent } from './draw-editor.component';

describe('DrawEditorComponent', () => {
  let component: DrawEditorComponent;
  let fixture: ComponentFixture<DrawEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
