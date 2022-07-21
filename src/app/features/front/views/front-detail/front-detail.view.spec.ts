import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDetailView } from './front-detail.view';

describe('FrontDetailView', () => {
  let component: FrontDetailView;
  let fixture: ComponentFixture<FrontDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontDetailView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
