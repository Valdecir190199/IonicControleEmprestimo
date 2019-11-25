import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursoListarPage } from './curso-listar.page';

describe('CursoListarPage', () => {
  let component: CursoListarPage;
  let fixture: ComponentFixture<CursoListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoListarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursoListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
