import { useState } from 'react';
import './Media.module.css';
import Menu from './components/Menu';

function Media() {
  const [notas, setNotas] = useState(Array(5).fill(''));
  const [media, setMedia] = useState(0);

  const calcularMedia = () => {
    const soma = notas.reduce((acc, curr) => acc + (curr ? parseFloat(curr) : 0), 0);
    setMedia(soma / notas.filter(nota => nota).length);
  };

  return (
    <>
      <Menu />
      <div className='container'>
        {notas.map((nota, index) => (
          <div key={index} className="nota-input">
            <label>{`Nota ${index + 1}`}</label>
            <input
              type="number"
              min="1"
              max="10"
              value={nota}
              onChange={(e) => {
                const valor = Math.max(1, Math.min(10, parseFloat(e.target.value)));
                const newNotas = [...notas];
                newNotas[index] = isNaN(valor) ? '' : valor;
                setNotas(newNotas);
              }}
            />
          </div>
        ))} 
        <button onClick={calcularMedia}>Calcular Média</button>
        <div className="media">Média: {media.toFixed(2)}</div>
      </div>
    </>
  );
}

export default Media;
