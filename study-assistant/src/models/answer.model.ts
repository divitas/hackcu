import { Question } from "./question.model";

export class Answer {
    question: Question;
    studentAnswer: string;
    isCorrect: boolean;
    id: any;

    constructor(question: Question, studentAnswer: string, isCorrect: boolean) {
        this.question = question;
        this.studentAnswer = studentAnswer;
        this.isCorrect = isCorrect;
    }

      
}