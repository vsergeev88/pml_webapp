import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const tg = window.Telegram?.WebApp;

  // Инициализация WebApp
  tg?.ready();

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!tg) {
      console.error('Telegram WebApp не найден');
      return;
    }

    // Отправка данных в бот
    tg.sendData(JSON.stringify({ text }));

    // Очистка поля после отправки
    setText('');
  };

  const onClose = () => {
    tg?.close(); // Закрытие WebApp
  };

  return (
    <div className="card">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст"
      />
      <button onClick={onSubmit}>Отправить</button>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
