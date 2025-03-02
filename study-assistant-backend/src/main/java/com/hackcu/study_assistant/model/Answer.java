package com.hackcu.study_assistant.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "answer")
public class Answer {
    @Id
    private String id;

    private String attemptId;
    private String questionId;
    private String studentAnswer;
    private Boolean isCorrect;

    public Answer() {
    }

    public Answer(String id, String attemptId, String questionId, String studentAnswer, Boolean isCorrect) {
        this.id = id;
        this.attemptId = attemptId;
        this.questionId = questionId;
        this.studentAnswer = studentAnswer;
        this.isCorrect = isCorrect;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAttemptId() {
        return attemptId;
    }

    public void setAttemptId(String attemptId) {
        this.attemptId = attemptId;
    }

    public String getQuestionId() {
        return questionId;
    }

    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }

    public String getStudentAnswer() {
        return studentAnswer;
    }

    public void setStudentAnswer(String studentAnswer) {
        this.studentAnswer = studentAnswer;
    }

    public Boolean getIsCorrect() {
        return isCorrect;
    }

    public void setIsCorrect(Boolean isCorrect) {
        this.isCorrect = isCorrect;
    }
}
