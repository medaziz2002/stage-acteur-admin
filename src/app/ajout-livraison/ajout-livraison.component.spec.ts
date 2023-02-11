import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutLivraisonComponent } from './ajout-livraison.component';

describe('AjoutLivraisonComponent', () => {
  let component: AjoutLivraisonComponent;
  let fixture: ComponentFixture<AjoutLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
