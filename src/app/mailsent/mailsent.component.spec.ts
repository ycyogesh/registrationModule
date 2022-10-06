import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsentComponent } from './mailsent.component';

describe('MailsentComponent', () => {
  let component: MailsentComponent;
  let fixture: ComponentFixture<MailsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
