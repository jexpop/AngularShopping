import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontMainView } from './front-main.view';

describe('FrontMainView', () => {
  let component: FrontMainView;
  let fixture: ComponentFixture<FrontMainView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontMainView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontMainView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
