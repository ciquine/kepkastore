import { useState, useEffect } from 'react';
import Card from './Card';
import { getCaps } from './data';

function Catalog() {
  const [caps, setCaps] = useState([]);

  useEffect(() => {
    getCaps().then((data) => {
      setCaps(data);
    });
  }, []);

  return (
    <div>
      <h1>кепочный магазин</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {caps.map((cap) => (
          <Card key={cap.id} item={cap} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;