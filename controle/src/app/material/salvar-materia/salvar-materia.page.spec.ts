import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalvarMateriaPage } from './salvar-materia.page';

describe('SalvarMateriaPage', () => {
  let component: SalvarMateriaPage;
  let fixture: ComponentFixture<SalvarMateriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarMateriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalvarMateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
