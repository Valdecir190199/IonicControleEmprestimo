import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarEmprestimoPage } from './listar-emprestimo.page';

describe('ListarEmprestimoPage', () => {
  let component: ListarEmprestimoPage;
  let fixture: ComponentFixture<ListarEmprestimoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEmprestimoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarEmprestimoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
