import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { ResultComponent } from './result/result.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';


export const routes: Routes = [
    { path: 'quiz/:quizId', component: QuizComponent },
    {path: 'flashcard', component: FlashcardComponent },
    { path: 'results', component: ResultComponent },
    {path: 'quizzes', component:QuizListComponent}
];
