import React from 'react';
import TrainCard from './TrainCard';

const TrainList = ({ trains }) => {
  if (trains.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '30px', color: '#666' }}>
        <h3>Потягів за вашим запитом не знайдено</h3>
        <p>Спробуйте змінити назву станції або номер потяга.</p>
      </div>
    );
  }

  return (
    <div className="train-list">
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default TrainList;