import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusScreenComponent } from './campus-screen.component';

describe('CampusScreenComponent', () => {
  let component: CampusScreenComponent;
  let fixture: ComponentFixture<CampusScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampusScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampusScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
