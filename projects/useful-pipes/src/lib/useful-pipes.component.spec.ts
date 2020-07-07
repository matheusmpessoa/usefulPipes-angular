import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulPipesComponent } from './useful-pipes.component';

describe('UsefulPipesComponent', () => {
  let component: UsefulPipesComponent;
  let fixture: ComponentFixture<UsefulPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsefulPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefulPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
