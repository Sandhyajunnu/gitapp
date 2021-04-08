import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaktipeetasComponent } from './shaktipeetas.component';

describe('ShaktipeetasComponent', () => {
  let component: ShaktipeetasComponent;
  let fixture: ComponentFixture<ShaktipeetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShaktipeetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaktipeetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
