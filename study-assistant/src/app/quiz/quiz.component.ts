import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizId: string = '';
  questions: any[] = [];
  timer: number = 60;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.quizId = params.get('quizId') || '';
      if (this.quizId) {
        this.fetchQuiz();
      }
    });
    this.startTimer();
  }

  fetchQuiz() {
    this.http.get(`http://localhost:8080/api/v1/quiz/${this.quizId}`).subscribe((quiz: any) => {
      this.questions = quiz.questions;
    });
  }

  startTimer() {
    const interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  
  

  
}
