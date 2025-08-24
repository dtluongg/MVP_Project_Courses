const TeacherCard = ({ teacher }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <img src={teacher.avatar} alt={teacher.name} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-lg font-bold text-center mt-2">{teacher.name}</h2>
      <p className="text-sm text-center">{teacher.country}</p>
      <p className="text-sm text-gray-600 text-center">{teacher.experience}</p>
      <p className="text-sm text-yellow-600 text-center">⭐ {teacher.rate}</p>
      <p className="text-sm text-blue-600 text-center">Buổi: {teacher.schedule}</p>
      <a 
        href={`/booking?teacherId=${teacher.id}`} 
        className="block mt-3 text-center bg-blue-500 text-white py-1 rounded-lg"
      >
        Đặt lịch học thử
      </a>
    </div>
  );
};

export default TeacherCard;
