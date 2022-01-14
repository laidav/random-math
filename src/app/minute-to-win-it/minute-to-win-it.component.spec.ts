import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinuteToWinItComponent } from './minute-to-win-it.component';

describe('MinuteToWinItComponent', () => {
  let component: MinuteToWinItComponent;
  let fixture: ComponentFixture<MinuteToWinItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinuteToWinItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinuteToWinItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
