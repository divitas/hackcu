import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SummaryPageComponent } from '../summary-page/summary-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, SummaryPageComponent],
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  selectedFiles: File[] = [];
  uploadMessage: string = '';

  constructor(private router: Router) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      let filesArray = Array.from(input.files);

      // Filter only allowed file types
      const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
      const validFiles = filesArray.filter(file => allowedTypes.includes(file.type));

      if (filesArray.length > 5) {
        this.uploadMessage = "You can only upload up to 5 files.";
        this.selectedFiles = [];
      } else if (validFiles.length !== filesArray.length) {
        this.uploadMessage = "Only PDF, DOCX, and TXT files are allowed.";
        this.selectedFiles = [];
      } else {
        this.selectedFiles = validFiles;
        this.uploadMessage = `Selected files: ${this.selectedFiles.map(file => file.name).join(', ')}`;
      }
    }
  }

  uploadFiles(): void {
    if (this.selectedFiles.length === 0) {
      this.uploadMessage = "No files selected!";
      return;
    }

    this.uploadMessage = "Uploading files... Please wait.";

    // Simulate upload
    setTimeout(() => {
      this.uploadMessage = "Upload successful!";
      this.selectedFiles = [];
    }, 2000);

    // Navigate to summary page after upload
    this.router.navigate(['/summary-page']);
  }
}
