import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AppComponent} from "./app.component";

describe('app component test', function (){
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async function (){
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create',function (){
    expect(component).toBeTruthy();
  });

})
