const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Description */}
        <div>
          <h2 className="text-xl font-bold text-white">English 1-1 With Antoree</h2>
          <p className="mt-4 text-sm text-gray-400">
            Nền tảng học tiếng Anh trực tuyến 1-1 với giáo viên trên toàn thế giới.
            Giúp bạn chinh phục ngoại ngữ dễ dàng, linh hoạt và hiệu quả.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Liên kết nhanh</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Trang chủ</a></li>
            <li><a href="/teachers" className="hover:text-white">Giáo viên</a></li>
            <li><a href="/packages" className="hover:text-white">Khóa học</a></li>
            <li><a href="/booking" className="hover:text-white">Đặt lịch</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Liên hệ</h3>
          <p>Email: <a href="mailto:support@antoree.com" className="hover:text-white">support@antoree.com</a></p>
          <p>Hotline: <span className="hover:text-white">1800 6806</span></p>
          <p>Địa chỉ: Hồ Chí Minh, Việt Nam</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Do Tien Luong. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
