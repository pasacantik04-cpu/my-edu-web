// types/index.ts

export interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctAnswer: number; // Indeks jawaban benar (0-3)
  explanation?: string;
}

export interface QuizModule {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface MaterialItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  funFact?: string;
}

export interface ExamResult {
  studentName: string;
  examTitle: string;
  score: number;
  correctCount: number;
  totalQuestions: number;
  submittedAt: Date;
}