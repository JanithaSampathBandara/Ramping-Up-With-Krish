import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import { NavBarComponent } from './nav-bar.component';
import {Location} from '@angular/common';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      imports: [RouterTestingModule.withRoutes([
        { path: 'home', component: DummyComponent },
        { path: 'file-upload', component: DummyComponent },
        { path: 'vehicle-list', component: DummyComponent }
      ])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should '' before clicking any button`, () => {
    const location = TestBed.inject(Location);
    expect(location.path()).toBe('');
  });

  it(`should navigate to '/home' when pressing 'Home' button`, async () => {
    const location = TestBed.inject(Location);
    const homebutton = fixture.debugElement.query(By.css('.homebtn')).nativeElement;
    homebutton.click();
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  });

  it(`should navigate to '/file-upload' when pressing 'File Upload' button`, async () => {
    const location = TestBed.inject(Location);
    const fileUploadBtn = fixture.debugElement.query(By.css('.fileuploadbtn')).nativeElement;
    fileUploadBtn.click();
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(location.path()).toBe('/file-upload');
    });
  });

  it(`should navigate to '/vehicle-list' when pressing 'Vehicle List' button`, async () => {
    const location = TestBed.inject(Location);
    const vehicleListBtn = fixture.debugElement.query(By.css('.vehiclelistbtn')).nativeElement;
    vehicleListBtn.click();
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(location.path()).toBe('/vehicle-list');
    });
  });
});

@Component({ template: '' })
class DummyComponent {}
