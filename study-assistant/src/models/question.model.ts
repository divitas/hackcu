export class Question {
    question: string;
    options: string[];
    answers: string;
   id: any;

    constructor(question: string, options: string[], answers: string) {
        this.question = question;
        this.options = options;
        this.answers = answers;
    }

      
}