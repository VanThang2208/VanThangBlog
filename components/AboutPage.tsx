
import React from 'react';
import { PROFILE, PROJECTS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Về bản thân tôi</h1>
        <div className="prose prose-lg text-slate-600 max-w-none space-y-6">
          <p>
            Xin chào! Tôi là <strong>{PROFILE.name}</strong>, một Kỹ sư Lập trình mạng với niềm đam mê sâu sắc dành cho kiến trúc hệ thống và an ninh mạng. 
          </p>
          <p>
            Sau khi tốt nghiệp Đại học Công nghệ TP.HCM (HUTECH), tôi đã dành nhiều thời gian để nghiên cứu về các giao thức mạng lõi (TCP/IP), bảo mật hệ thống doanh nghiệp và đặc biệt là lĩnh vực Software-Defined Networking (SDN).
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 pt-8">Hành trình học tập & Sự nghiệp</h2>
          <p>
            Tại HUTECH, tôi không chỉ tích lũy kiến thức nền tảng vững chắc mà còn tham gia vào các dự án nghiên cứu về giám sát mạng và phát hiện xâm nhập. Hiện tại, tôi đang công tác trong lĩnh vực tư vấn giải pháp mạng và bảo mật cho các doanh nghiệp.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 pt-8">Sứ mệnh của Blog</h2>
          <p>
            Blog này được tạo ra như một thư viện kiến thức cá nhân, nơi tôi lưu trữ những kinh nghiệm thực chiến từ các dự án mình đã tham gia. Mục tiêu của tôi là giúp cộng đồng kỹ sư mạng Việt Nam dễ dàng tiếp cận với các công nghệ mới thông qua các bài viết chuyên sâu và dễ hiểu.
          </p>

          <div className="bg-blue-600 rounded-3xl p-8 text-white mt-12 shadow-xl shadow-blue-100">
            <h3 className="text-xl font-bold mb-4">Chứng chỉ & Thành tựu</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Cisco Certified Network Professional (CCNP)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Tốt nghiệp loại Ưu - HUTECH University
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Network Security Professional
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Top 5 cuộc thi Security Hackathon 2023
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
