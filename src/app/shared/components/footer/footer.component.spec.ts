import { FooterComponent } from './footer.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('footer component test', function (){
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async function (){
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should create', function (){
    expect(component).toBeTruthy();
  });
})
