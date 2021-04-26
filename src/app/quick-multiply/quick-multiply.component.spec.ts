import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickMultiplyComponent } from './quick-multiply.component';

describe('QuickMultiplyComponent', () => {
  let component: QuickMultiplyComponent;
  let fixture: ComponentFixture<QuickMultiplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickMultiplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickMultiplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
