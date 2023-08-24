import { useState } from 'react';
import './App.css';
import CardComponent from './components/Cards/CardComponent';
import InputComponent from './components/Input/InputComponent';

function App() {
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeImgUrl = (event) => {
    setImgUrl(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();

    const isTitleValid = title.trim().length >= 3 && !title.startsWith(' ');
    const isImgUrlValid = imgUrl.trim().length >= 6 && /\d/.test(imgUrl);

    if (isTitleValid && isImgUrlValid) {
      const newCard = {
        title: title,
        imgUrl: imgUrl
      };

      setCards([...cards, newCard]);
      setTitle('');
      setImgUrl('');
      setErrorMessage('');
    } else {
      setErrorMessage('Por favor, verifique os dados inseridos no formulário.');
    }
  };

  return (
    <>
      <h2>Minha lista de Pokemons</h2>

      <form>
        <InputComponent
          title="Insira o nome:"
          type="text"
          value={title}
          fnOnChange={handleChangeTitle}
        />

        <InputComponent
          title="Coloque a imagem do seu avatar:"
          type="url"
          value={imgUrl}
          fnOnChange={handleChangeImgUrl}
        />

        <button onClick={handleButtonClick}>Salvar</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {cards.map((card, index) => (
        <CardComponent
          key={index}
          title={card.title}
          imgUrl={card.imgUrl}
        />
      ))}
    </>
  );
}

export default App;
