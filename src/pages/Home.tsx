import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { HeaderContainer, SelectedButton, UnselectedButton } from "../components/Header/styles";
import { Add, FormContainer, NavbarContainer, StyledSelect, Title } from "../components/Navbar/styles";
import { api } from "../config/api";
import { mattersData } from "../config/config";
import { Container } from "./styles";

import { useState, useCallback, useEffect } from "react"
import { toast } from 'react-toastify';

import Modal from "react-modal";
import { SearchContainer, SearchInput } from "../components/Search/styles";

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

const styles = {
  dateInput: {
    padding: '10px',  // Adapte o espaçamento conforme necessário
    border: '1px solid #ccc',  // Adicione uma borda para separar visualmente o input
    borderRadius: '5px',  // Arredonde os cantos para um visual mais suave
    fontSize: '16px',  // Tamanho da fonte
    lineHeight: '1.5',  // Espaçamento entre linhas
  },
};

export default function Home() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedButton, setSelectedButton] = useState("activities");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State para armazenar a imagem selecionada

  const [deadline, setDeadline] = useState(null) as any; // State para armazenar a data de entrega [Não obrigatório

  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedTeacherSubjects, setSelectedTeacherSubjects] = useState([]) as any;

  const [matter, setMatter] = useState(null) as any;
  const [activity, setActivity] = useState(null);
  const [type, setType] = useState('not_delivery') as any;
  const [password, setPassword] = useState(null);

  const [search, setSearch] = useState(null as any);

  function handleSelectedButton(button: string) {
    if (button === selectedButton) return;

    setSelectedButton(button);
  }

  const handleActivities = useCallback(async (params?: string) => {
    setLoading(true);

    setTimeout(async () => {
      const response = await api.get(`/activities/${params === "activities" ? "activities" : "jobs"}`);
      setActivities(response.data);
    }, 250)

    setLoading(false);
  }, []);

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

    const deadlineUpdated = new Date(deadline).toISOString();

    data.append('teacher', String(selectedTeacher));
    data.append('matter', String(matter));
    data.append('deliveryDate', String(deadlineUpdated));
    data.append('activityOrHability', String(activity)); // Supondo que activity contém o valor correto
    data.append('type', String(type)); // Supondo que type contém o valor correto
    data.append('password', String(password)); // Supondo que password contém o valor correto
    data.append('image', selectedImage as any);

    try {
      await api.post('/activities', data);

      toast("Atividade adicionada com sucesso!", {
        theme: "dark",
      })

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast("Erro ao adicionar atividade!", {
        theme: "dark",
      })
    }
  }

  const handleImageUpload = (event: any) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setSelectedImage(selectedImage);
    }
  };

  const searchActivities = async (params: string) => {
    setLoading(true);

    setInterval(async () => {
      const response = await api.get(`/activities/search?&search=${params}`);

      setActivities(response.data);

    }, 250);

    setLoading(false);
  };

  const uniqueTeacherNames = Array.from(new Set(mattersData.map(subject => subject.teacher)));

  const handleTeacherSelect = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedTeacher(selectedValue);

    const subjects = mattersData.filter(subject => subject.teacher === selectedValue);
    setSelectedTeacherSubjects(subjects);
  };

  useEffect(() => {
    handleActivities(selectedButton);
  }, [selectedButton])

  useEffect(() => {
    if (search === null || search === "") return;

    searchActivities(search);
  }, [search])

  return (
    <>
      <Container>
        <NavbarContainer>
          <Title>3C</Title>

          <SearchContainer>
            <img src="/assets/search.svg" alt="Search" />
            <SearchInput onChange={
              (event: any) => setSearch(event.target.value)
            } type="text" placeholder={`Tente “Matemática”`} />
          </SearchContainer>

          <Add onClick={() => setModalIsOpen(true)}>
            <img src="/assets/add.svg" alt="Add" />
          </Add>

        </NavbarContainer>

        <HeaderContainer>
          <SelectedButton
            onClick={() => handleSelectedButton("activities")}
            selected={selectedButton === "activities"}
          >
            Atividades
          </SelectedButton>

          <UnselectedButton
            onClick={() => handleSelectedButton("jobs")}
            selected={selectedButton === "jobs"}
          >
            Trabalhos
          </UnselectedButton>
        </HeaderContainer>

        {loading ? (
          <div className="loading-container">
            <h1>Carregando</h1>
            <div className="loading-dots">
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </div>
          </div>
        ) : (
          activities.map((activity: any) => (
            <Content
              key={activity?.id}
              imgURL={`https://schoolapi.syncrostudios.com.br/images/${activity?.imageURL}`}
              teacher={activity?.teacher}
              matter={activity?.matter}
              activity={activity?.activityOrHability}
              date={activity?.createdAt}
              deadline={activity?.deliveryDate}
            />
          ))
        )}

        <Footer />
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

              <StyledSelect onChange={(event) => setMatter(event.target.value)}>
                <option value="">Selecione a matéria</option>

                {selectedTeacherSubjects.map((subject: any) => (
                  <option key={subject.subject} value={subject.subject}
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

          <StyledSelect onChange={(event) => setType(event.target.value)}>
            <option value="not_delivery">Atividade para deixar no caderno</option>
            <option value="job_to_delivery">Trabalho para entregar</option>
            <option value="activity_to_delivery">Atividade para entregar</option>
          </StyledSelect>

          {
            (type === 'job_to_delivery' || type === 'activity_to_delivery') && (
              <>
                <label>Data de entrega:</label>
                <input type="date" style={styles.dateInput}
                  onChange={
                    (event: any) => setDeadline(event.target.value)
                  }
                />
                <br />
              </>
            )
          }

          {/* Image File */}
          <label>Imagem:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />


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