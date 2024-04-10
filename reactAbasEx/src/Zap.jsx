import { useState } from 'react';
import './Zap.css';
import Menu from './components/Menu';

function Zap() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensagemFormatada = encodeURIComponent(`Nome: ${nome} Email: ${email} Mensagem: ${mensagem}`);   
    const numeroWhatsApp = '41984754573'; 
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <div>
      <Menu />
      <div className="contato-container">
        <form className='form-container' onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          ></textarea>

          <button type="submit">Enviar mensagem</button>
        </form>

        <iframe className='map-container'
          title="localizacao"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4486024915436!2d-46.65658448444526!3d-23.589297884667676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cc24e877c9%3A0x1ce4126a502745ee!2sAv.%20Paulista%2C%201578%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e0!3m2!1sen!2sbr!4v1642514074954"
          width="500"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Zap;
