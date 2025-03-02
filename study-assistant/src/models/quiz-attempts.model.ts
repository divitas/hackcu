import { Answer } from "./answer.model";

export interface QuizAttempt {
    id: string;                     // Unique ID for the attempt
    studentId: string;              // Student ID
    quizId: string;                 // The ID of the quiz
    attemptedAt: string;            // The date and time the quiz was attempted
    score: number;                  // Score achieved in the quiz
    totalQuestions: number;         // Total number of questions in the quiz
    answers: Answer[];              // Array of answers for this attempt
    quizName: string;               // Name of the quiz
    quizDescription: string;        // Description of the quiz
  }
  