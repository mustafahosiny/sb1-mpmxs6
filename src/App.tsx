import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LearningPaths from './components/LearningPaths';
import Offerings from './components/Offerings';
import SuccessStories from './components/SuccessStories';
import CourseDemo from './components/CourseDemo';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white font-arabic">
      <Navbar />
      <Hero />
      <LearningPaths />
      <Offerings />
      <SuccessStories />
      <CourseDemo />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;