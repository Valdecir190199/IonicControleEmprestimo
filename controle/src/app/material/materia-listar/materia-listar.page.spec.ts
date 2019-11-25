import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MateriaListarPage } from './materia-listar.page';

describe('MateriaListarPage', () => {
  let component: MateriaListarPage;
  let fixture: ComponentFixture<MateriaListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaListarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MateriaListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
