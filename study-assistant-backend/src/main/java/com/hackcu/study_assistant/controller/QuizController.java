package com.hackcu.study_assistant.controller;

import com.hackcu.study_assistant.model.Quiz;
import com.hackcu.study_assistant.model.QuizAttempt;
import com.hackcu.study_assistant.model.QuizRequest;
import com.hackcu.study_assistant.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping("/create-quiz")
    public String createQuiz(@RequestBody QuizRequest quizRequest) {
        quizService.createNewQuiz(quizRequest.getQuestions(), quizRequest.getSummary(), quizRequest.getName());
        return "New quiz created successfully";
    }

    @PostMapping("/attempt")
    public ResponseEntity<String> submitQuiz(@RequestBody QuizAttempt quizAttempt) {
        quizService.saveQuizAttempt(quizAttempt);
        return ResponseEntity.ok("Quiz attempt submitted successfully");
    }

    @GetMapping("/name")
    private List<Quiz> getQuizByName(@RequestParam("name") String name) {
        List<Quiz> quiz = quizService.getQuizByName(name);

        if (quiz.isEmpty()) {
            throw new RuntimeException("No quiz found for id: " + name);
        }

        return quiz;


    }

    @GetMapping("/quizzes")
    private List<Quiz> getAllQuizzes() {
        List<Quiz> quiz = quizService.getAllQuizzes();

        if (quiz.isEmpty()) {
            throw new RuntimeException("No quiz found: ");
        }

        return quiz;


    }

    @GetMapping("/result/{studentId}/{quizId}")
    private QuizAttempt getQuizAttempt(@PathVariable String studentId, @PathVariable String quizId) {
        QuizAttempt result = quizService.getQuizAttemptByIds(studentId, quizId);

        if (result == null) {
            throw new RuntimeException("No quiz found for id: " + studentId);
        }

        return result;


    }

}
