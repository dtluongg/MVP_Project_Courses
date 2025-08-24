import { useState } from "react";

const BookingForm = ({ teacherId }) => {
  const [form, setForm] = useState({ name: "", email: "", date: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bạn đã đặt lịch thành công!\nThông tin: ${JSON.stringify(form)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Đặt lịch học thử</h2>
      <input 
        type="text" 
        name="name" 
        placeholder="Họ tên" 
        className="w-full p-2 border rounded mb-3"
        onChange={handleChange}
        required
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        className="w-full p-2 border rounded mb-3"
        onChange={handleChange}
        required
      />
      <input 
        type="date" 
        name="date" 
        className="w-full p-2 border rounded mb-3"
        onChange={handleChange}
        required
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded">Xác nhận</button>
    </form>
  );
};

export default BookingForm;
