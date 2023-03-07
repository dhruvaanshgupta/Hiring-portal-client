import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAddEditComponent } from './data-add-edit.component';

describe('DataAddEditComponent', () => {
  let component: DataAddEditComponent;
  let fixture: ComponentFixture<DataAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
