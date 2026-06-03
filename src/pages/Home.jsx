import React, { useState } from 'react';
import { trainsData } from '../data/trains';
import TrainList from '../components/TrainList';

const Home = () => {
  // Стани для фільтрації
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [searchNumber, setSearchNumber] = useState('');

  // Логіка фільтрації потягів
  const filteredTrains = trainsData.filter((train) => {
    const matchesFrom = train.from.toLowerCase().includes(searchFrom.toLowerCase());
    const matchesTo = train.to.toLowerCase().includes(searchTo.toLowerCase());
    const matchesNumber = train.number.toLowerCase().includes(searchNumber.toLowerCase());

    return matchesFrom && matchesTo && matchesNumber;
  });

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#0056B3', marginBottom: '30px' }}>
        Система бронювання квитків Укрзалізниця
      </h1>

      {/* Панель пошуку */}
      <div style={{
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <div style={{ flex: '1', minWidth: '200px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Звідки:</label>
          <input
            type="text"
            placeholder="Наприклад: Київ"
            value={searchFrom}
            onChange={(e) => setSearchFrom(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ flex: '1', minWidth: '200px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Куди:</label>
          <input
            type="text"
            placeholder="Наприклад: Львів"
            value={searchTo}
            onChange={(e) => setSearchTo(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ flex: '1', minWidth: '150px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>№ Потяга:</label>
          <input
            type="text"
            placeholder="Наприклад: 743К"
            value={searchNumber}
            onChange={(e) => setSearchNumber(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
      </div>

      {/* Виведення результатів */}
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Доступні рейси</h2>
      <TrainList trains={filteredTrains} />
    </div>
  );
};

export default Home;