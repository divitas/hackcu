package com.hackcu.study_assistant.repository;

import com.hackcu.study_assistant.model.QuizAttempt;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface QuizAttemptRepository extends MongoRepository<QuizAttempt, String> {
    @Query("{'studentId': ?0, 'quizId': ?1}")
    QuizAttempt findByStudentAndQuizId(String studentId, String quizId);
}
