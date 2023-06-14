import { CardComponent } from './card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('card component test', function (){
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async function (){
    await TestBed.configureTestingModule({
      declarations: [CardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  })

  it('should create',  function (){
    expect(component).toBeTruthy();
  });

  it('should emit open details events', function (){
    spyOn(component.openDetailsEvent, 'emit')
    component.openDetails('details');

    expect(component.openDetailsEvent.emit).toHaveBeenCalledOnceWith('details');
  });

  it('should emit edit events', function (){
    spyOn(component.editEvent, 'emit')
    component.edit('edit');

    expect(component.editEvent.emit).toHaveBeenCalledOnceWith('edit');
  });

  it('should emit delete events', function (){
    spyOn(component.deleteEvent, 'emit')
    component.delete('delete');

    expect(component.deleteEvent.emit).toHaveBeenCalledOnceWith('delete');
  });
});
