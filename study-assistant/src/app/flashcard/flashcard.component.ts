import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports:[HttpClientModule],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.css'
})
export class FlashcardComponent {
  questions: Question[] = [];
  currentIndex: number = 0;
  showAnswer: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchQuestions();
  }

  fetchQuestions() {
    this.http.get('http://localhost:8080/api/v1/quiz/quizzes').subscribe((data: any) => {
      this.questions = data[0]?.questions || [];
    });
  }

  toggleAnswer() {
    this.showAnswer = !this.showAnswer;
  }

  previousCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showAnswer = false;
    }
  }

  nextCard() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.showAnswer = false;
    }
  }
} 