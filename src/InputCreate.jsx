import React, { useState } from 'react';

const InputCreate = ({ refreshTasks }) => {
    const [title, setTitle] = useState('');
  
    const handleSubmit = async () => {
      if (!title.trim()) return;
  
      try {
        const res = await fetch('http://localhost:3000/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title }),
        });
  
        if (res.ok) {
          alert('Tarea creada correctamente');
          setTitle('');
          refreshTasks(); // 👈 recargar la lista
        } else {
          alert('Error al crear la tarea');
        }
      } catch (error) {
        console.error('Error al enviar tarea:', error);
      }
    };
  
    return (
      <div style={{ padding: '1rem' }}>
        <h2>Crear Tarea</h2>
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    );
  };
  

  export default InputCreate;
