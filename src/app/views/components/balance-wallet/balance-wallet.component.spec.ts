import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceWalletComponent } from './balance-wallet.component';

describe('BalanceWalletComponent', () => {
  let component: BalanceWalletComponent;
  let fixture: ComponentFixture<BalanceWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
