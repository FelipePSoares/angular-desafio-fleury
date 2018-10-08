import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeudiaComponent } from './seudia.component';

describe('SeudiaComponent', () => {
  let component: SeudiaComponent;
  let fixture: ComponentFixture<SeudiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeudiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeudiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
