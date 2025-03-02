import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
    {path: 'quiz', component: QuizComponent},
    {path: 'flashcard', component: FlashcardComponent },
    { path: 'results', component: ResultComponent }
];
