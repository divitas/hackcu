import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  selectedFile: File | null = null;
  uploadMessage: string = '';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.uploadMessage = `Selected file: ${this.selectedFile.name}`;
    }
  }

  uploadFile(): void {
    if (!this.selectedFile) {
      return;
    }

    // Simulating file upload process
    setTimeout(() => {
      this.uploadMessage = `File "${this.selectedFile?.name}" uploaded successfully.`;
      this.selectedFile = null;
    }, 1500);
  }
}
