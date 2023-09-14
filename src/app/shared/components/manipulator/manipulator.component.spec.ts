import { ManipulatorComponent } from './manipulator.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Shop } from "../../../modules/shops/classes/shop";


describe('manipulator component test', function (){
  let component: ManipulatorComponent;
  let fixture: ComponentFixture<ManipulatorComponent>;

  beforeEach(async function (){
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ManipulatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManipulatorComponent);
    component = fixture.componentInstance;
  });

  it('should create', function (){
    expect(component).toBeTruthy();
  });

  it('should interrupt init if key was not founded', () => {
    spyOn(Object, 'keys').and.returnValue([undefined]);

    component.ngOnInit();

    expect(component.title).toBeUndefined();
  });

  it('should emit creation result event', function() {
    spyOn(component.creationResultEvent, 'emit');
    component.shop = new Shop();
    component.creationMode = true;
    component.ngOnInit();
    component.manipulate();

    expect(component.creationResultEvent.emit).toHaveBeenCalledWith(component.form.value);
  });

  it('should emit edition result event', function() {
    spyOn(component.editionResultEvent, 'emit');
    component.shop = new Shop();
    component.recordId = '1';
    component.creationMode = false;
    component.ngOnInit();
    component.manipulate();

    expect(component.editionResultEvent.emit).toHaveBeenCalledWith({...component.form.value, id: component.recordId});
  });

  it('should emit cancel event', function () {
    spyOn(component.cancelEvent, 'emit');
    component.cancel();

    expect(component.cancelEvent.emit).toHaveBeenCalledWith(true);
  });
})
