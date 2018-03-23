import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPratoComponent } from './cadastro-prato.component';

describe('CadastroPratoComponent', () => {
  let component: CadastroPratoComponent;
  let fixture: ComponentFixture<CadastroPratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
