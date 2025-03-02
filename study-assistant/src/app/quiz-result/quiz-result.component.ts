import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-result',
  imports:[CommonModule, HttpClientModule],
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultsComponent implements OnInit {
  quizAttempts: any[] = [];
  studentId: string = '67c395db62c1e76a149cb28b'; // Hardcoded student ID
  expandedRowIndex: number | null = null;
i: any;
attempt: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getQuizAttempts();
  }

  getQuizAttempts(): void {
    this.http.get<any[]>(`http://localhost:8080/api/v1/quiz/attempts/${this.studentId}`).subscribe(
      (data) => {
        console.log('Quiz Attempts:', data);  // Log the response to make sure it is correct
        this.quizAttempts = data;

        // Now, we can fetch the quiz details for each quiz attempt using the quizId
        this.quizAttempts.forEach(attempt => {
          this.getQuizDetails(attempt.quizId, attempt);
        });
      },
      (error) => {
        console.error('Error fetching quiz attempts:', error);
      }
    );
  }

  getQuizDetails(quizId: string, attempt: any): void {
    this.http.get<any>(`http://localhost:8080/api/v1/quiz/${quizId}`).subscribe(
      (quiz) => {
        attempt.quizName = quiz.name;
        attempt.quizDescription = quiz.description;
      },
      (error) => {
        console.error(`Error fetching quiz details for quizId ${quizId}:`, error);
      }
    );
  }

  toggleDetails(index: number): void {
    this.expandedRowIndex = this.expandedRowIndex === index ? null : index;
  }

  getCorrectAnswers(attempt: any): number {
    return attempt.answers.filter((answer: any) => answer.isCorrect).length;
  }

  getIncorrectAnswers(attempt: any): number {
    return attempt.answers.filter((answer: any) => !answer.isCorrect).length;
  }
}
