import { TestBed } from '@angular/core/testing';
import { FormationSessionMaiComponent } from './app-formation-session-mai.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FormationSessionMaiComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FormationSessionMaiComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'formation-trai'`, () => {
    const fixture = TestBed.createComponent(FormationSessionMaiComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('formation-trai');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FormationSessionMaiComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('formation-trai app is running!');
  });
});
