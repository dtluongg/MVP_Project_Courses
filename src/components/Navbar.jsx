import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="ml-20 text-xl font-bold">English 1-1 With Antoree</h1>
      <div className= "flex gap-2 mr-20 space-x-4">
        <Link to="/">Trang chủ</Link>
        <Link to="/teachers">Giáo viên</Link>
        <Link to="/packages">Khóa học</Link>
        <Link to="/booking">Đặt lịch</Link>
      </div>
    </nav>
  );
};

export default Navbar;
