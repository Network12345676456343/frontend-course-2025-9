import React from 'react';

const WagonSelector = ({ wagons, selectedWagon, onSelectWagon }) => {
  return (
    <div style={{ marginBottom: '25px' }}>
      <h3 style={{ marginBottom: '10px', color: '#333' }}>Оберіть вагон:</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {wagons.map((wagon) => (
          <button
            key={wagon.number}
            onClick={() => onSelectWagon(wagon)}
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              border: selectedWagon?.number === wagon.number ? '2px solid #0056B3' : '1px solid #ccc',
              background: selectedWagon?.number === wagon.number ? '#e6f0fa' : '#fff',
              color: selectedWagon?.number === wagon.number ? '#0056B3' : '#333',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Вагон №{wagon.number}
            <div style={{ fontSize: '0.75rem', fontWeight: 'normal', marginTop: '4px', color: '#666' }}>
              {wagon.type} ({wagon.freeSeats} місць)
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WagonSelector;