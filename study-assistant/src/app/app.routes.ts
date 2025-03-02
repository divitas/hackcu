import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';

import { ResultComponent } from './result/result.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';

export const routes: Routes = [
    { path: 'quiz/:quizId', component: QuizComponent },
    {path: 'flashcard', component: FlashcardComponent },
    { path: 'results', component: ResultComponent },
      { path: 'landing-page', component: LandingPageComponent },
    { path: 'summary-page', component: SummaryPageComponent },
    {path: 'quizzes', component:QuizListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
