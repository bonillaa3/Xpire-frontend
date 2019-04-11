import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveExpComponent } from './save-exp.component';

describe('SaveExpComponent', () => {
  let component: SaveExpComponent;
  let fixture: ComponentFixture<SaveExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
