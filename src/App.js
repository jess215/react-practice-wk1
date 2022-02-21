import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './App.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <div className="container">
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is the fastest animal on land?',
    answer: 'Cheetah',
    options: [
      'Gazelle',
      'Rhino',
      'Cheetah',
      'Hippo'
    ]
  },
  {
    id: 3,
    question: 'How fast can a peregrine falcon dive bomb?',
    answer: '150 mph',
    options: [
      '80 mph',
      '120 mph',
      '95 mph',
      '150 mph'
    ]
  },
]

export default App;
