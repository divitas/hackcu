import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { By } from '@angular/platform-browser';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the heading', () => {
    const headingElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(headingElement.textContent).toContain('Welcome to the Student Upload Portal');
  });

  it('should display the paragraph', () => {
    const paragraphElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(paragraphElement.textContent).toContain('Upload your study materials in PDF, DOCX, or TXT format.');
  });

  it('should disable upload button when no file is selected', () => {
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.disabled).toBeTrue();
  });

  it('should enable upload button when a file is selected', () => {
    const file = new File(['dummy content'], 'test.pdf', { type: 'application/pdf' });
    component.onFileSelected({ target: { files: [file] } } as unknown as Event);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.disabled).toBeFalse();
  });

  it('should update upload message after selecting a file', () => {
    const file = new File(['dummy content'], 'test.pdf', { type: 'application/pdf' });
    component.onFileSelected({ target: { files: [file] } } as unknown as Event);
    fixture.detectChanges();

    expect(component.uploadMessage).toBe('Selected file: test.pdf');
  });

  it('should display a success message after uploading a file', (done) => {
    const file = new File(['dummy content'], 'test.pdf', { type: 'application/pdf' });
    component.selectedFile = file;
    component.uploadFile();
    fixture.detectChanges();

    setTimeout(() => {
      expect(component.uploadMessage).toBe('File "test.pdf" uploaded successfully.');
      done();
    }, 1500);
  });
});