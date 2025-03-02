import { Component, Inject, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';  // Assuming QuizService is in the same directory
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-test-quiz',
  imports:[CommonModule, HttpClientModule],
  providers:[QuizService],
  templateUrl: './test-quiz.component.html',
  styleUrls: ['./test-quiz.component.css']
})
export class TestQuizComponent implements OnInit {

  quizRequest: any;
  flaskApiResponse: any = {
    "6.pdf_query1": {
      "query": "In what decade did Osgood come up with the idea to use a point in three-dimensional space to represent the connotation of a word?",
      "correct answers": [
        {
          "answer": "1957",
          "type": "extractive",
          "score": 0.7177157402038574,
          "context": "Osgood’s 1957 idea to use a point in three-dimensional space to represent...",
          "offsets_in_document": [
            { "start": 79, "end": 83 }
          ],
          "document_ids": ["49f3249709211dc7d78bfcc742ea8f4d"]
        }
      ],
      "generated options": [
        {
          "answer": "1957",
          "type": "extractive",
          "score": 0.96145099401474,
          "context": "Osgood et al. (1957) noticed that in using these 3 numbers to represent...",
          "offsets_in_document": [
            { "start": 2792, "end": 2796 }
          ],
          "document_ids": ["8238168d22c2aa1c5ccf6b7ea6d24288"]
        },
        {
          "answer": "1980",
          "type": "extractive",
          "score": 0.03987618535757065,
          "context": "The role of context is also important in the similarity of a less biological concept (Gould, 1980).",
          "offsets_in_document": [
            { "start": 1291, "end": 1295 }
          ],
          "document_ids": ["34e7046b264b20bb77744b3ac361a10d"]
          }
      ],
      "id": "6.pdf"
    }
  };

  constructor(private quizService: QuizService, private http: HttpClient) {}

  ngOnInit(): void {
    // Call the service method to transform the Flask response into a quiz request
    this.quizRequest = this.quizService.transformFlaskResponseToQuizRequest(this.flaskApiResponse);
    console.log(this.quizRequest);

    this.http.post('http://localhost:8080/api/v1/quiz/create-quiz', this.quizRequest).subscribe(response => {
      console.log('Result saved:', response);
    });
  }
}
