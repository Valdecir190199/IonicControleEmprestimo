import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalvarEmprestimoPage } from './salvar-emprestimo.page';

describe('SalvarEmprestimoPage', () => {
  let component: SalvarEmprestimoPage;
  let fixture: ComponentFixture<SalvarEmprestimoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarEmprestimoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalvarEmprestimoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
