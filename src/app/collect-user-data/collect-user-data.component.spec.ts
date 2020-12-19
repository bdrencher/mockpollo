import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectUserDataComponent } from './collect-user-data.component';

describe('CollectUserDataComponent', () => {
  let component: CollectUserDataComponent;
  let fixture: ComponentFixture<CollectUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectUserDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
