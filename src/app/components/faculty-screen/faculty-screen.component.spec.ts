import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyScreenComponent } from './faculty-screen.component';

describe('FacultyScreenComponent', () => {
  let component: FacultyScreenComponent;
  let fixture: ComponentFixture<FacultyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
