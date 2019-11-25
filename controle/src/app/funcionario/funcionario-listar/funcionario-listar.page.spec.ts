import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuncionarioListarPage } from './funcionario-listar.page';

describe('FuncionarioListarPage', () => {
  let component: FuncionarioListarPage;
  let fixture: ComponentFixture<FuncionarioListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioListarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncionarioListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
