import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule.withRoutes([
        {path: 'vehicle-list', component: DummyComponent},
        {path: 'file-upload', component: DummyComponent}
      ])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title in h2 tag', () => {
    const dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector('h2').textContent).toContain('Welcome To The Automobile App');
  });

  it(`should go to '/vehicle-list' when pressing 'Vehicle List' button`, async () => {
    const location = TestBed.inject(Location);
    const vehicleListBtn = fixture.debugElement.query(By.css('.vehiclelistbtn')).nativeElement;
    vehicleListBtn.click();
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(location.path()).toBe('/vehicle-list');
    });
  });

  it(`should go to '/file-upload' when pressing 'File Upload' button`, async () => {
    const location = TestBed.inject(Location);
    const fileUploadBtn = fixture.debugElement.query(By.css('.fileuploadbtn')).nativeElement;
    fileUploadBtn.click();
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(location.path()).toBe('/file-upload');
    });
  });
});

@Component({ template: '' })
class DummyComponent {}
