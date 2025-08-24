import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background banner */}
      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
        alt="English Learning Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
        >
          Học Tiếng Anh 1-1 Trực Tuyến
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-lg text-gray-200"
        >
          Kết nối với giáo viên phù hợp, đặt lịch học thử miễn phí và bắt đầu ngay hôm nay!
        </motion.p>

        {/* Actions */}
        <div className="mt-8 flex justify-center gap-6">
          <motion.a
            href="/teachers"
            whileHover={{ scale: 1.05 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-600 transition"
          >
            Tìm giáo viên
          </motion.a>
          <motion.a
            href="/packages"
            whileHover={{ scale: 1.05 }}
            className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition"
          >
            Chọn khóa học
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
