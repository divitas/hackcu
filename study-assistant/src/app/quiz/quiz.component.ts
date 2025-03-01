import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Question } from '../../models/question.model';
import { ResultComponent } from '../result/result.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ResultComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  userAnswers: number[] = [];
  score: number = 0;
  timer: number = 0;
  showResults: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchQuestions();
    this.startTimer();
  }

  fetchQuestions() {
    this.http.get('http://localhost:8080/api/v1/quiz/quizzes').subscribe((data: any) => {
      this.questions = data[0]?.questions || []; 
    });
  }

  startTimer() {
    this.timer = 60;
    const interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(interval);
        this.calculateResults();
      }
    }, 1000);
  }

  selectAnswer(questionIndex: number, selectedOptionIndex: number) {
    this.userAnswers[questionIndex] = selectedOptionIndex;
  }

  calculateResults() {
    this.score = this.questions.reduce((score, question, index) => {
      const userAnswer = question.options[this.userAnswers[index]];
      return score + (userAnswer === question.answer ? 1 : 0);
    }, 0);
  }

  submitQuiz() {
    this.calculateResults();
    this.showResults = true;
  }

  goToFlashcards() {
    this.router.navigate(['/flashcard'])
  }
}
