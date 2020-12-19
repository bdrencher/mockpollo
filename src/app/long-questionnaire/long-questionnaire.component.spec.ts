import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongQuestionnaireComponent } from './long-questionnaire.component';

describe('LongQuestionnaireComponent', () => {
  let component: LongQuestionnaireComponent;
  let fixture: ComponentFixture<LongQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
