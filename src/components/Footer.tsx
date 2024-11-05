import React from 'react';
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-indigo-400" />
              <span className="mr-2 text-xl font-bold">أكاديمية ذكي</span>
            </div>
            <p className="text-gray-400">
              تمكين العقول الشابة بمهارات المستقبل من خلال تعليم تقني مبتكر
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">الدورات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">المسارات التعليمية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">قصص النجاح</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">المدونة</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">المصادر</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">دليل الوالدين</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">بوابة الطالب</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">طريقة التدريس</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 ml-2 text-indigo-400" />
                <span className="text-gray-400">info@thakiapp.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 ml-2 text-indigo-400" />
                <span className="text-gray-400">+966 50 123 4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 ml-2 text-indigo-400" />
                <span className="text-gray-400">شارع التقنية، الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} أكاديمية ذكي. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}