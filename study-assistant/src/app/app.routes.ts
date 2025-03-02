import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';

export const routes: Routes = [
    { path: 'quiz/:quizId', component: QuizComponent },
    {path: 'flashcard', component:FlashcardComponent},
    {path: 'quizzes', component:QuizListComponent}
];
