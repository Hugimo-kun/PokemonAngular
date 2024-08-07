import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonEquipeComponent } from './mon-equipe.component';

describe('MonEquipeComponent', () => {
  let component: MonEquipeComponent;
  let fixture: ComponentFixture<MonEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonEquipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
