import { writable } from 'svelte/store'

export const courseId = writable(1)
export const courses = writable([
  {
    id: 0,
    name: "Database Design Fundamentals for Software Engineers",
    feedbacks: [
      {
        id: 1,
        rating: 7,
        text: 'The course was good but I struggled in developing interest into the course. Adding more interactive elements will solve this problems',
      },
      {
        id: 0,
        rating: 10,
        text: 'This was the best course I have taken so far. It gave me a very in depth knowledge the subject. Will recommend to others',
      },
      {
        id: 2,
        rating: 4,
        text: 'It was no up the expectations.',
      },
    ],
  },
  {
    id: 1,
    name: "Grokking Modern System Design for Software Engineers & Managers",
    feedbacks: [
      {
        id: 1,
        rating: 7,
        text: 'The course was good but I struggled in developing interest into the course. Adding more interactive elements will solve this problems',
      },
      {
        id: 2,
        rating: 4,
        text: 'It was no up the expectations.',
      },
      {
        id: 0,
        rating: 10,
        text: 'This was the best course I have taken so far. It gave me a very in depth knowledge the subject. Will recommend to others',
      },
    ],
  },
  {
    id: 2,
    name: "AI Project Management: Deploying and Maintaining AI for Business",
    feedbacks: [
      {
        id: 2,
        rating: 4,
        text: 'It was no up the expectations.',
      },
      {
        id: 0,
        rating: 10,
        text: 'This was the best course I have taken so far. It gave me a very in depth knowledge the subject. Will recommend to others',
      },
      {
        id: 1,
        rating: 7,
        text: 'The course was good but I struggled in developing interest into the course. Adding more interactive elements will solve this problems',
      },
    ],
  },
  {
    id: 3,
    name: "Python 201 - Interactively Learn Advanced Concepts in Python 3",
    feedbacks: [
      {
        id: 0,
        rating: 9,
        text: 'This was the best course I have taken so far. It gave me a very in depth knowledge the subject. Will recommend to others',
      },
      {
        id: 1,
        rating: 7,
        text: 'The course was good but I struggled in developing interest into the course. Adding more interactive elements will solve this problems',
      },
      {
        id: 2,
        rating: 5,
        text: 'It was no up the expectations.',
      },
    ],
  },
  {
    id: 4,
    name: "Operating Systems: Virtualization, Concurrency & Persistence",
    feedbacks: [
      {
        id: 0,
        rating: 10,
        text: 'This was the best course I have taken so far. It gave me a very in depth knowledge the subject. Will recommend to others',
      },
      {
        id: 1,
        rating: 8,
        text: 'The course was good but I struggled in developing interest into the course. Adding more interactive elements will solve this problems',
      },
      {
        id: 2,
        rating: 4,
        text: 'It was no up the expectations.',
      },
    ],
  },
  {
    id: 5,
    name: "Java 8 for Experienced Developers: Lambdas, Stream API & Beyond",
    feedbacks: [
      {
        id: 0,
        rating: 10,
        text: 'This was the best course I have taken so far. It gave me a very in depth knowledge the subject. Will recommend to others',
      },
      {
        id: 2,
        rating: 4,
        text: 'It was no up the expectations.',
      },
      {
        id: 1,
        rating: 7,
        text: 'The course was good but I struggled in developing interest into the course. Adding more interactive elements will solve this problems',
      },
    ],
  },
])