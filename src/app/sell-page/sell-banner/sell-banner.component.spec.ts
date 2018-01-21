import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellBannerComponent } from './sell-banner.component';

describe('SellBannerComponent', () => {
  let component: SellBannerComponent;
  let fixture: ComponentFixture<SellBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
