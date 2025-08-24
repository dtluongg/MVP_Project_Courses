import { useState } from "react";
import { teachers } from "../data";
import TeacherCard from "../components/TeacherCard";

const Teachers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCountry, setFilterCountry] = useState("");
  const [filterRate, setFilterRate] = useState("");
  const [filterSlot, setFilterSlot] = useState("");

  const teachersPerPage = 9;

  // 1. Lọc dữ liệu
  const filteredTeachers = teachers.filter((t) => {
    const matchCountry = filterCountry ? t.country === filterCountry : true;
    const matchRate = filterRate ? t.rate >= parseFloat(filterRate) : true;
    const matchSlot = filterSlot ? t.availableSlots.includes(filterSlot) : true;
    return matchCountry && matchRate && matchSlot;
  });

  // 2. Sắp xếp theo rate giảm dần
  const sortedTeachers = [...filteredTeachers].sort((a, b) => b.rate - a.rate);

  // 3. Tính phân trang
  const totalPages = Math.ceil(sortedTeachers.length / teachersPerPage);
  const startIndex = (currentPage - 1) * teachersPerPage;
  const endIndex = startIndex + teachersPerPage;
  const currentTeachers = sortedTeachers.slice(startIndex, endIndex);

  // Reset về trang 1 mỗi khi đổi filter
  const handleFilterChange = (setter, value) => {
    setter(value);
    setCurrentPage(1);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Danh sách giáo viên</h1>

      {/* Bộ lọc */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {/* Quốc gia */}
        <select
          value={filterCountry}
          onChange={(e) => handleFilterChange(setFilterCountry, e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">-- Tất cả quốc gia --</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Philippines">Philippines</option>
        </select>

        {/* Rate */}
        <select
          value={filterRate}
          onChange={(e) => handleFilterChange(setFilterRate, e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">-- Tất cả rate --</option>
          <option value="4.5">Trên 4.5⭐</option>
          <option value="4.0">Trên 4.0⭐</option>
          <option value="3.5">Trên 3.5⭐</option>
        </select>

      </div>

      {/* Danh sách giáo viên */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentTeachers.length > 0 ? (
          currentTeachers.map((t) => <TeacherCard key={t.id} teacher={t} />)
        ) : (
          <p className="text-center col-span-3">Không tìm thấy giáo viên phù hợp</p>
        )}
      </div>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Teachers;
