import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPratoComponent } from './editar-prato.component';

describe('EditarPratoComponent', () => {
  let component: EditarPratoComponent;
  let fixture: ComponentFixture<EditarPratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
