export const trainsData = [
  {
    id: "743К",
    number: "743К",
    type: "Інтерсіті+",
    from: "Київ",
    to: "Львів",
    date: "2026-06-04",
    departureTime: "06:19",
    arrivalTime: "12:15",
    duration: "5 г. 56 хв.",
    wagons: [
      { id: 1, type: "Сидячий 1-клас", freeSeats: 12 },
      { id: 2, type: "Сидячий 2-клас", freeSeats: 34 }
    ]
  },
  {
    id: "091К",
    number: "091К",
    type: "Нічний Швидкий",
    from: "Київ",
    to: "Львів",
    date: "2026-06-04",
    departureTime: "22:37",
    arrivalTime: "06:26",
    duration: "7 г. 49 хв.",
    wagons: [
      { id: 3, type: "Купе", freeSeats: 18 },
      { id: 4, type: "Плацкарт", freeSeats: 42 }
    ]
  },
  {
    id: "012К",
    number: "012К",
    type: "Нічний Експрес",
    from: "Львів",
    to: "Київ",
    date: "2026-06-05",
    departureTime: "20:12",
    arrivalTime: "04:58",
    duration: "8 г. 46 хв.",
    wagons: [
      { id: 5, type: "Люкс", freeSeats: 4 },
      { id: 6, type: "Купе", freeSeats: 22 }
    ]
  }
];