function Card({ item }) {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px', width: '200px' }}>
      <img src={item.image} alt={item.name} width="150" />
      <h3>{item.name}</h3>
      <p>Цена {item.price} рублей</p>
      <button onClick={() => alert('вы купили кепочку')}>Приобресть</button>
    </div>
  );
}

export default Card;