import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineelistComponent } from './traineelist.component';

describe('TraineelistComponent', () => {
  let component: TraineelistComponent;
  let fixture: ComponentFixture<TraineelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
