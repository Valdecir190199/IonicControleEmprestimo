import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalvarPage } from './salvar.page';

describe('SalvarPage', () => {
  let component: SalvarPage;
  let fixture: ComponentFixture<SalvarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalvarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
