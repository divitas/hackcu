import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SummaryPageComponent } from '../summary-page/summary-page.component';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, SummaryPageComponent],
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  selectedFile: File | null = null;
  uploadMessage: string = '';

  constructor(private router: Router) {}

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
    this.uploadMessage = "Uploading file... Please wait.";

    // Simulating file upload process
    localStorage.setItem('uploadedFile', JSON.stringify({
      name: this.selectedFile?.name,
      size: this.selectedFile?.size,
      type: this.selectedFile?.type
    }));
  
    this.uploadMessage = "Upload successful!";
      
    // Ensure upload is complete before navigating
    this.router.navigate(['/summary-page']);
  }
}