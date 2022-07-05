import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePreferenceListComponent } from './store-preference-list.component';

describe('StorePreferenceListComponent', () => {
  let component: StorePreferenceListComponent;
  let fixture: ComponentFixture<StorePreferenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePreferenceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePreferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
