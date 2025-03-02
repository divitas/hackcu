import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-list',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.http.get('http://localhost:8080/api/v1/quiz/quizzes').subscribe((data: any) => {
      this.quizzes = data;
    });
  }

  startQuiz(quizId: string) {
    this.router.navigate(['/quiz', quizId]); // Navigate to quiz page with quizId
  }
}
