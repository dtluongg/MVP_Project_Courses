import { motion } from "framer-motion";
import { courses } from "../data/courses.js";

const Packages = () => {
  

  return (
    <div className="p-10">
      {/* Courses Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-10">Khoá học nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{course.description}</p>
                <p className="text-gray-500 text-sm">Trình độ: {course.level}</p>
                <p className="text-gray-500 text-sm">Thời lượng: {course.duration}</p>
                <p className="text-blue-600 font-bold mt-2">{course.price}</p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
                >
                  Đăng ký ngay
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
