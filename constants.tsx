
import { BlogPost, Project, Skill } from './types';

export const PROFILE = {
  name: "Đào Văn Thắng",
  role: "Kỹ sư Lập trình mạng & Bảo mật",
  description: "Chuyên gia trong việc thiết kế và triển khai các hệ thống mạng phức tạp, lập trình socket hiệu năng cao và bảo mật hạ tầng. Cựu sinh viên Đại học Công nghệ TP.HCM (HUTECH), hiện đang tập trung vào các giải pháp SDN và Cloud Networking.",
  avatarUrl: "https://picsum.photos/seed/thang-pro/400/400",
  email: "thang.dao.work@gmail.com",
  github: "https://github.com/thangdao",
  linkedin: "https://linkedin.com/in/thangdao",
  location: "TP. Hồ Chí Minh, Việt Nam"
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Hiểu sâu về TCP Three-Way Handshake",
    excerpt: "Khám phá chi tiết quy trình bắt tay 3 bước của TCP và cách nó đảm bảo tính tin cậy.",
    content: "TCP (Transmission Control Protocol) sử dụng cơ chế bắt tay ba bước để thiết lập một kết nối tin cậy...",
    date: "2024-05-15",
    category: "Giao thức",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Lập trình Socket với Python: Multi-threading Server",
    excerpt: "Xây dựng ứng dụng Chat đa người dùng sử dụng socket và threading trong Python.",
    content: "Lập trình mạng không thể thiếu socket. Trong bài viết này, chúng ta sẽ tìm hiểu cách tạo một Server xử lý đa luồng...",
    date: "2024-06-02",
    category: "Lập trình",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "OSI Model vs TCP/IP Stack: Thực tế và Lý thuyết",
    excerpt: "Sự khác biệt thực tế giữa mô hình 7 lớp lý thuyết và mô hình 4 lớp thực thi trên Internet.",
    content: "Mô hình OSI là khung lý thuyết giúp phân loại các chức năng mạng thành 7 lớp...",
    date: "2024-06-10",
    category: "Lý thuyết",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Triển khai VPN site-to-site với IPsec",
    excerpt: "Hướng dẫn cấu hình bảo mật kết nối giữa hai chi nhánh văn phòng qua môi trường Internet.",
    content: "IPsec là một bộ các giao thức để bảo mật giao thông Internet Protocol (IP)...",
    date: "2024-07-20",
    category: "Bảo mật",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "Network Automation với Ansible",
    excerpt: "Tại sao NetDevOps là tương lai và cách tự động hóa cấu hình hàng trăm Switch trong tích tắc.",
    content: "Automation không còn là lựa chọn, mà là bắt buộc đối với kỹ sư mạng hiện đại...",
    date: "2024-08-05",
    category: "Tự động hóa",
    imageUrl: "https://images.unsplash.com/photo-1518433278981-1127cc9e45c6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Wireshark: Kỹ năng phân tích gói tin đỉnh cao",
    excerpt: "Làm thế nào để bắt được 'thủ phạm' làm chậm hệ thống mạng thông qua việc phân tích Traffic.",
    content: "Wireshark là công cụ mã nguồn mở mạnh mẽ nhất để phân tích lưu lượng mạng...",
    date: "2024-09-12",
    category: "Công cụ",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "7",
    title: "Bảo mật hệ thống mạng với IDS/IPS",
    excerpt: "Sự khác biệt giữa phát hiện xâm nhập và ngăn chặn xâm nhập trong hạ tầng doanh nghiệp.",
    content: "IDS (Intrusion Detection System) và IPS (Intrusion Prevention System) đóng vai trò then chốt...",
    date: "2024-10-01",
    category: "Bảo mật",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "8",
    title: "Tìm hiểu về IPv6 và lộ trình chuyển đổi",
    excerpt: "Tương lai của định chỉ Internet khi kho địa chỉ IPv4 đã chính thức cạn kiệt.",
    content: "IPv6 cung cấp không gian địa chỉ khổng lồ 128-bit, giải quyết triệt để vấn đề NAT...",
    date: "2024-11-15",
    category: "Giao thức",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "9",
    title: "Software Defined Networking (SDN) cơ bản",
    excerpt: "Tách biệt Control Plane và Data Plane - Cuộc cách mạng trong quản trị mạng tập trung.",
    content: "SDN thay đổi cách chúng ta nghĩ về phần cứng mạng truyền thống bằng cách ảo hóa...",
    date: "2024-12-20",
    category: "Công nghệ mới",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Enterprise Network Design",
    description: "Thiết kế hạ tầng mạng cho doanh nghiệp 500 nhân sự với độ sẵn sàng cao (High Availability).",
    technologies: ["Cisco", "Fortinet", "VLAN", "STP", "OSPF"]
  },
  {
    id: "p2",
    name: "AI-Powered IDS",
    description: "Hệ thống phát hiện xâm nhập sử dụng Machine Learning để nhận diện mã độc mạng.",
    technologies: ["Python", "TensorFlow", "Scapy", "ELK Stack"]
  }
];

export const SKILLS: Skill[] = [
  { name: "Cisco CCNP Enterprise", level: 90, category: "Network" },
  { name: "Python for Network Engineers", level: 85, category: "Programming" },
  { name: "Network Security (Firewalls)", level: 88, category: "Network" },
  { name: "Cloud Infrastructure (AWS/GCP)", level: 75, category: "Tool" },
  { name: "Linux Administration", level: 82, category: "Tool" }
];
