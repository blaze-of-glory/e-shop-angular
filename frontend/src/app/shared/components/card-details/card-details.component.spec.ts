import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDetailsComponent } from './card-details.component';

describe('card details component test', function (){
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

  beforeEach(async function (){
    await TestBed.configureTestingModule({
      declarations: [CardDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', function (){
    expect(component).toBeTruthy();
  });
})
