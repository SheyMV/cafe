import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BribeComponent } from './bribe.component';

describe('BribeComponent', () => {
  let component: BribeComponent;
  let fixture: ComponentFixture<BribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
