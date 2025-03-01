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
  selectedFiles: File[] = [];
  uploadMessage: string = '';

  constructor(private router: Router) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles = Array.from(input.files);
      this.uploadMessage = `Selected files: ${this.selectedFiles.map(file => file.name).join(', ')}`;
    }
  }

  uploadFiles(): void {
    if (this.selectedFiles.length === 0) {
      this.uploadMessage = "No files selected!";
      return;
    }

    this.uploadMessage = "Uploading files... Please wait.";

    // Simulating upload
    setTimeout(() => {
      this.uploadMessage = "Upload successful!";
      this.selectedFiles = [];
    }, 2000);
    this.router.navigate(['/summary-page']);
  }
}
