import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalvarCursoPage } from './salvar-curso.page';

describe('SalvarCursoPage', () => {
  let component: SalvarCursoPage;
  let fixture: ComponentFixture<SalvarCursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarCursoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalvarCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
