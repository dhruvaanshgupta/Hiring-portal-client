import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileDetailsComponent } from './student-profile-details.component';

describe('StudentProfileDetailsComponent', () => {
  let component: StudentProfileDetailsComponent;
  let fixture: ComponentFixture<StudentProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProfileDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
