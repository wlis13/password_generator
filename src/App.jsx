import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css'

function App() {
  const password = nanoid();
  const [passworState, setPasswordState] = useState("");
  const [originalUlr, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState({});

  function generatePassword() {
    setPasswordState(password);
  }

  function handleChange({ target }) {
    const { value } = target;
    setOriginalUrl(value);
  }

  function createShortUrl() {
    const object = {};
    object[password] = originalUlr;
    setShortUrl(object);
  }

  return (
    <div className='container_app_password_generator'>
      <h1>Gerador de senhas</h1>
      <button
        id='button_generate_password'
        type='button'
        onClick={generatePassword}
      >
        Gerar senha
      </button>
      <h1
        id='password'
      >
        {passworState.length > 0 ? passworState : "..."}
      </h1>

      <h1 id='title_short_url'>Diminuir url</h1>
      <input
        type="text"
        placeholder='Digite a Url'
        onChange={handleChange}
        id='input_url'
      />
      <button
        onClick={createShortUrl}
        type='button'
        id='button_generate_url'
      >
        Gerar Url curta
      </button>
      <a
        target='_blank'
        href={originalUlr}
      >
        {Object.keys(shortUrl)[0]}
      </a>
    </div>
  )
}

export default App;
