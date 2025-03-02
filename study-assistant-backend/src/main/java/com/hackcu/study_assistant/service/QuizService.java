package com.hackcu.study_assistant.service;

import com.hackcu.study_assistant.model.Question;
import com.hackcu.study_assistant.model.Quiz;
import com.hackcu.study_assistant.model.QuizAttempt;
import com.hackcu.study_assistant.repository.QuizAttemptRepository;
import com.hackcu.study_assistant.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuizService {

    @Autowired
    QuizRepository quizRepository;

    @Autowired
    QuizAttemptRepository quizAttemptRepository;

    public void createNewQuiz(List<Question> questions, String summary, String name) {
        Quiz quiz = new Quiz(name, summary, questions);
        quizRepository.save(quiz);
    }

    public void saveQuizAttempt(QuizAttempt quizAttempt) {
        quizAttemptRepository.save(quizAttempt);
    }

    public List<Quiz> getQuizByName(String name) {
        return quizRepository.findAllByName(name);
    }

    public QuizAttempt getQuizAttemptByIds(String studentId, String quizId) {
        return quizAttemptRepository.findByStudentAndQuizId(studentId, quizId);
    }

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Quiz getQuizById(String id) {
        Optional<Quiz> quizResponse = quizRepository.findById(id);
        return quizResponse.orElse(null);
    }
}
