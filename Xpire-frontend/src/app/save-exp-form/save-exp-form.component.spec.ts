import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveExpFormComponent } from './save-exp-form.component';

describe('SaveExpFormComponent', () => {
  let component: SaveExpFormComponent;
  let fixture: ComponentFixture<SaveExpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveExpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveExpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
