import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMaterialListComponent } from './datepicker-material-list.component';

describe('DatepickerMaterialListComponent', () => {
  let component: DatepickerMaterialListComponent;
  let fixture: ComponentFixture<DatepickerMaterialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerMaterialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
