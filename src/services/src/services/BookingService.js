const STORAGE_KEY = 'uz_bookings';

export const BookingService = {
  // Отримати всі бронювання
  getBookings() {
    const bookings = localStorage.getItem(STORAGE_KEY);
    return bookings ? JSON.parse(bookings) : [];
  },

  // Зберегти нове бронювання
  saveBooking(bookingData) {
    const bookings = this.getBookings();
    const newBooking = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...bookingData
    };
    bookings.push(newBooking);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    return newBooking;
  },

  // Отримати заброньовані місця для конкретного потяга та вагона
  getBookedSeats(trainId, wagonNumber) {
    const bookings = this.getBookings();
    return bookings
      .filter(b => b.trainId === trainId && b.wagonNumber === wagonNumber)
      .reduce((seats, b) => [...seats, ...b.seats], []);
  }
};