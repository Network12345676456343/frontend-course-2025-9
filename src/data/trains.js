export const trainsData = [
  {
    id: "1", // Обов'язково в лапках, як рядок!
    number: "743Л",
    type: "Інтерсіті+",
    from: "Київ-Пасажирський",
    to: "Львів",
    departureTime: "06:19",
    arrivalTime: "11:47",
    duration: "5г 28хв",
    date: "Завтра",
    wagons: [
      { number: 1, type: "1 клас", totalSeats: 42, freeSeats: 12 },
      { number: 2, type: "2 клас", totalSeats: 64, freeSeats: 34 },
      { number: 3, type: "2 клас", totalSeats: 64, freeSeats: 5 }
    ]
  },
  {
    id: "2", // Обов'язково в лапках!
    number: "091К",
    type: "Нічний Експрес",
    from: "Київ-Пасажирський",
    to: "Львів",
    departureTime: "22:37",
    arrivalTime: "06:26",
    duration: "7г 49хв",
    date: "Завтра",
    wagons: [
      { number: 4, type: "Купе", totalSeats: 36, freeSeats: 18 },
      { number: 5, type: "Люкс (СВ)", totalSeats: 18, freeSeats: 4 },
      { number: 6, type: "Купе", totalSeats: 36, freeSeats: 22 }
    ]
  }
];