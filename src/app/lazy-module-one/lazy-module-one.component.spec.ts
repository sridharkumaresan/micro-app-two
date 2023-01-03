import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyModuleOneComponent } from './lazy-module-one.component';

describe('LazyModuleOneComponent', () => {
  let component: LazyModuleOneComponent;
  let fixture: ComponentFixture<LazyModuleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyModuleOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyModuleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
