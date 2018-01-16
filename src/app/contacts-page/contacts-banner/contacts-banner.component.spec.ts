import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsBannerComponent } from './contacts-banner.component';

describe('ContactsBannerComponent', () => {
  let component: ContactsBannerComponent;
  let fixture: ComponentFixture<ContactsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
