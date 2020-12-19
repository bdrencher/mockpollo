import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyQuestionnaireComponent } from './daily-questionnaire.component';

describe('DailyQuestionnaireComponent', () => {
  let component: DailyQuestionnaireComponent;
  let fixture: ComponentFixture<DailyQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
