import React from 'react';

const TrainCard = ({ train }) => {
  // Рахуємо загальну кількість вільних місць у потягу
  const totalSeats = train.wagons.reduce((sum, wagon) => sum + wagon.freeSeats, 0);

  return (
    <div className="train-card">
      <div className="train-header">
        <span className="train-number">№ {train.number}</span>
        <span className="train-type">{train.type}</span>
      </div>
      
      <div className="train-route-info">
        <div className="route-point">
          <div className="time">{train.departureTime}</div>
          <div className="city">{train.from}</div>
          <div className="date">{train.date}</div>
        </div>
        
        <div className="route-duration">
          <div className="duration-line"></div>
          <div className="duration-text">В дорозі: {train.duration}</div>
        </div>
        
        <div className="route-point alignment-right">
          <div className="time">{train.arrivalTime}</div>
          <div className="city">{train.to}</div>
          <div className="date">{train.date}</div>
        </div>
      </div>

      <div className="train-footer">
        <div className="seats-info">
          Всього місць: <span className="seats-count">{totalSeats}</span>
        </div>
        <button className="book-btn">Вибрати потяг</button>
      </div>
    </div>
  );
};

export default TrainCard;