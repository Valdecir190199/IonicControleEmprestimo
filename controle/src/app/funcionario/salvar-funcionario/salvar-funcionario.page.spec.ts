import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalvarFuncionarioPage } from './salvar-funcionario.page';

describe('SalvarFuncionarioPage', () => {
  let component: SalvarFuncionarioPage;
  let fixture: ComponentFixture<SalvarFuncionarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarFuncionarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalvarFuncionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
