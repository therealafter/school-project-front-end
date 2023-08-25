import { SearchComponent } from "../Search"
import { Container, Add, Title, FormContainer } from "./styles"

import { useState } from "react";

import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    color: "#FFF",
    background: '#121212',  // Definindo o fundo preto
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleImageUpload = (event: any) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      // Aqui você pode fazer o que quiser com a imagem selecionada,
      // como fazer o upload para o servidor, exibir em uma pré-visualização, etc.
    }
  };

  return (
    <>
      <Container>
        <Title>3C</Title>
        <SearchComponent />
        <Add onClick={() => setModalIsOpen(true)}>
          <img src="/assets/add.svg" alt="Add" />
        </Add>
      </Container>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={() => setModalIsOpen(true)}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Adicionar atividade"
      >
        <h2>Adicionar atividade</h2>

        <FormContainer>
          <label>Professor(a):</label>
          <input type="text" />

          <label>Matéria:</label>
          <input type="text" />

          <label>Atividade:</label>
          <input type="text" />

          {/* Image File */}
          <label>Imagem:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />

          <button type="submit">Adicionar</button>
        </FormContainer>
      </Modal>
    </>

    // </Modal>
  )
}