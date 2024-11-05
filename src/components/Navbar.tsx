import React, { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-indigo-600" />
            <span className="mr-2 text-xl font-bold text-gray-800">أكاديمية ذكي</span>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="flex items-center">
              <a href="#courses" className="text-gray-600 hover:text-indigo-600 transition-colors px-5">الدورات</a>
              <a href="#paths" className="text-gray-600 hover:text-indigo-600 transition-colors px-5">المسارات التعليمية</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors px-5">من نحن</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors px-5">اتصل بنا</a>
            </div>
            <div className="mr-10">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                سجل الآن
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#courses" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">الدورات</a>
            <a href="#paths" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">المسارات التعليمية</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">من نحن</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">اتصل بنا</a>
            <button className="w-full text-center bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700">
              سجل الآن
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}