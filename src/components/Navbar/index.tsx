import { SearchComponent } from "../Search"
import { Container, Add, Title, FormContainer, StyledSelect } from "./styles"

import { useState } from "react";

import Modal from 'react-modal';
import { toast } from "react-toastify";
import { api } from "../../config/api";

import { mattersData } from "../../config/config";

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  content: {
    border: 'none',
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
  const [selectedImage, setSelectedImage] = useState(null); // State para armazenar a imagem selecionada

  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedTeacherSubjects, setSelectedTeacherSubjects] = useState([]) as any;

  const [matter, setMatter] = useState(null) as any;
  const [activity, setActivity] = useState(null);
  const [type, setType] = useState('activity_not_delivery') as any;
  const [password, setPassword] = useState(null);

  const addActivity = async (event: any) => {
    event.preventDefault();

    if (!selectedTeacher || !matter || !activity || !type || !password) {
      toast("Preencha todos os campos!", {
        theme: "dark",
      })
      return;
    }

    setModalIsOpen(false);

    const data = new FormData();

    data.append('teacher', String(selectedTeacher));
    data.append('matter', String(matter));
    data.append('activityOrHability', String(activity)); // Supondo que activity contém o valor correto
    data.append('type', String(type)); // Supondo que type contém o valor correto
    data.append('password', String(password)); // Supondo que password contém o valor correto
    data.append('image', selectedImage as any);

    try {
      await api.post('/activities', data);

      toast("Atividade adicionada com sucesso!", {
        theme: "dark",
      })
    } catch (error) {
      toast("Erro ao adicionar atividade!", {
        theme: "dark",
      })
    }
  }

  const handleImageUpload = (event: any) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const imageURL = URL.createObjectURL(selectedImage);
      setSelectedImage(imageURL as any);
    }
  };

  const uniqueTeacherNames = Array.from(new Set(mattersData.map(subject => subject.teacher)));

  const handleTeacherSelect = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedTeacher(selectedValue);

    const subjects = mattersData.filter(subject => subject.teacher === selectedValue);
    setSelectedTeacherSubjects(subjects);
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
        ariaHideApp={false}
      >
        <h2>Adicionar atividade</h2>

        <FormContainer onSubmit={addActivity}>
          <label>Professor(a):</label>

          <StyledSelect onChange={handleTeacherSelect}>
            <option value="">Selecione o professor</option>

            {uniqueTeacherNames.map(teacher => (
              <option key={teacher} value={teacher}>
                {teacher}
              </option>
            ))}
          </StyledSelect>

          {selectedTeacher && (
            <>
              <label>Matéria:</label>

              <StyledSelect>
                <option value="">Selecione a matéria</option>

                {selectedTeacherSubjects.map((subject: any) => (
                  <option key={subject.subject} value={subject.subject}
                    onSelect={() => setMatter(subject.subject)}
                  >
                    {subject.subject}
                  </option>
                ))}

              </StyledSelect>
            </>
          )}

          <label>Atividade ou Habilidade:</label>
          <input type="text"
            onChange={
              (event: any) => setActivity(event.target.value)
            }
          />

          <label>Tipo:</label>

          <StyledSelect>
            <option onSelect={
              () => setType('activity_not_delivery')
            } value="1">Atividade para deixar no caderno</option>
            <option onSelect={
              () => setType('job_to_deliver')
            } value="2">Trabalho para entregar</option>
            <option onSelect={
              () => setType('activity_to_deliver')
            } value="3">Atividade para entregar</option>
          </StyledSelect>

          {/* Image File */}
          <label>Imagem:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />

          {selectedImage && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <img
                src={selectedImage}
                alt="Preview"
                style={{ maxWidth: '50%', border: '2px solid #8656b8', borderRadius: '8px' }}
              />
            </div>
          )}


          {/* Secret input */}
          <label>Senha:</label>
          <input type="text"
            onChange={
              (event: any) => setPassword(event.target.value)
            }
          />

          <button type="submit">Adicionar</button>
        </FormContainer>
      </Modal>
    </>
  )
}