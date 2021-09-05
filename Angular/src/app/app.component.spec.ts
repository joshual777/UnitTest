import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component : AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    component = new AppComponent();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Investigacion1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Investigacion1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Investigacion1 app is running!');
  });

  it('Debe retornar un array ordenado', () => {
    // Define la entrada del método
    const a: number[] = [1, 10, 2, 8, 9, 5, 75];
    // Define el resultado esperado
    const result: number[] = [1, 2, 5, 8, 9, 10, 75];
    // Compara el resultado real con el esperado
    expect(component.BBS(a)).toEqual(result);
  });
});
