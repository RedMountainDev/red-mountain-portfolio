import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCategoryComponent } from './experience-category.component';

describe('ExperienceCategoryComponent', () => {
  let component: ExperienceCategoryComponent;
  let fixture: ComponentFixture<ExperienceCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
