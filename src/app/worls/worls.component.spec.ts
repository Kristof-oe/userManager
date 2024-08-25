import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorlsComponent } from './worls.component';

describe('WorlsComponent', () => {
  let component: WorlsComponent;
  let fixture: ComponentFixture<WorlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
