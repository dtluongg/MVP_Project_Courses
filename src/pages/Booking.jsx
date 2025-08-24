import { useLocation } from "react-router-dom";
import BookingForm from "../components/BookingForm";

const Booking = () => {
  const query = new URLSearchParams(useLocation().search);
  const teacherId = query.get("teacherId");

  return (
    <div className="p-6">
      <BookingForm teacherId={teacherId} />
    </div>
  );
};

export default Booking;
