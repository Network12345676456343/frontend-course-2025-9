import React from 'react';

const SeatMap = ({ totalSeats, bookedSeats, selectedSeats, onSeatClick }) => {
  const seatsArray = Array.from({ length: totalSeats }, (_, i) => i + 1);

  return (
    <div style={{ marginBottom: '30px', background: '#f8f9fa', padding: '20px', borderRadius: '12px' }}>
      <h3 style={{ marginBottom: '15px', color: '#333' }}>Схема місць вагона:</h3>
      
      {/* Легенда */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', fontSize: '0.9rem' }}>
        <div style={{ display: 'flex', alignAtems: 'center', gap: '5px' }}>
          <div style={{ width: '20px', height: '20px', background: '#28a745', borderRadius: '4px' }}></div> Вільне
        </div>
        <div style={{ display: 'flex', alignAtems: 'center', gap: '5px' }}>
          <div style={{ width: '20px', height: '20px', background: '#0056B3', borderRadius: '4px' }}></div> Обране
        </div>
        <div style={{ display: 'flex', alignAtems: 'center', gap: '5px' }}>
          <div style={{ width: '20px', height: '20px', background: '#dc3545', borderRadius: '4px', cursor: 'not-allowed' }}></div> Зайняте
        </div>
      </div>

      {/* Сітка місць */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(45px, 1fr))', 
        gap: '10px',
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #eee'
      }}>
        {seatsArray.map((seat) => {
          const isBooked = bookedSeats.includes(seat);
          const isSelected = selectedSeats.includes(seat);

          let bg = '#28a745'; // Вільне
          if (isBooked) bg = '#dc3545'; // Зайняте
          if (isSelected) bg = '#0056B3'; // Обране

          return (
            <button
              key={seat}
              disabled={isBooked}
              onClick={() => onSeatClick(seat)}
              style={{
                height: '45px',
                background: bg,
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: isBooked ? 'not-allowed' : 'pointer',
                opacity: isBooked ? 0.6 : 1,
                transition: 'transform 0.1s'
              }}
            >
              {seat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SeatMap;