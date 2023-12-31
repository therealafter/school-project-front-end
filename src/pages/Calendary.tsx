import { Link } from "react-router-dom";
import { NavbarContainer, Title } from "../components/Navbar/styles";
import { SearchContainer } from "../components/Search/styles";
import { Container } from "./styles";

import { useEffect, useState } from "react";
import { classSchedule } from "../config/calendary";
import { ActuallyTeacher, ActuallyTime, TeacherContainer } from "../components/Calendary/styles";

export const Calendary = () => {
  const [currentSchedule, setCurrentSchedule] = useState([]) as any;
  const [otherSchedule, setOtherSchedule] = useState([]) as any;
  const [isWeekend, setIsWeekend] = useState(false);
  const [isClassTime, setIsClassTime] = useState(false);

  const getCurrentDayAndTime = () => {
    const now = new Date();
    const dayIndex = now.getDay();
    const currentTime = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    return {
      day: dayIndex,
      time: currentTime,
    };
  };

  const getDayName = (dayIndex: any) => {
    const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    return daysOfWeek[dayIndex];
  };

  const isTimeBetween = (currentTime: any, timeRange: any) => {
    const [start, end] = timeRange.split(" - ");
    return currentTime >= start && currentTime <= end;
  };

  useEffect(() => {
    const { day, time } = getCurrentDayAndTime();

    if (day === 0 || day === 6) {
      setIsWeekend(true);
    } else {
      setIsWeekend(false);

      const dayName = getDayName(day as any) as any;

      const dayClass = classSchedule as any;
      const currentDaySchedule = dayClass[dayName] as any;

      if (currentDaySchedule) {
        const isClassTime = currentDaySchedule.some((lesson: any) => isTimeBetween(time, lesson.time));
        setIsClassTime(isClassTime);
        setCurrentSchedule(currentDaySchedule);

        if (isClassTime) {
          const currentLesson = currentDaySchedule.find((lesson: any) => isTimeBetween(time, lesson.time));

          if (currentLesson) {
            setCurrentSchedule([currentLesson]);

            const otherLessons = currentDaySchedule.filter((lesson: any) => lesson.time !== currentLesson.time);
            setOtherSchedule(otherLessons);
          }
        }
      }
    }
  }, []);

  return (
    <Container>
      <NavbarContainer>
        <Title>
          <Link to="/">
            <img src="/assets/calendary.png" alt="Bell" />
          </Link>
        </Title>

        <SearchContainer></SearchContainer>
      </NavbarContainer>

      <Title>
        {isWeekend ? (
          <p>Não é dia de aula no momento.</p>
        ) : isClassTime ? (
          <>
            <strong>Aula em andamento.</strong>

            <TeacherContainer>
              <ActuallyTime>Aula atual: {currentSchedule[0].subject} - {currentSchedule[0].time} </ActuallyTime>
              <ActuallyTeacher>Professor(a): {currentSchedule[0].professor}</ActuallyTeacher>
            </TeacherContainer>

            <br />

            {/* proximas aulas */}
            <p>Próximas aulas:</p>

            {otherSchedule
              .filter((lesson: any) => getCurrentDayAndTime().time <= lesson.time) // Filtra as aulas que não passaram ainda
              .map((lesson: any, index: any) => {
                return (
                  <TeacherContainer
                    key={index}
                    style={{
                      padding: '10px',
                      marginBottom: '10px',
                      borderRadius: '7px',
                      backgroundColor: 'black',
                    }}
                  >
                    <ActuallyTime>{lesson.subject} - {lesson.time}</ActuallyTime>
                    {lesson.professor !== "Sem Professor" && (
                      <ActuallyTeacher>Professor(a): {lesson.professor}</ActuallyTeacher>
                    )}
                  </TeacherContainer>
                );
              })}
          </>
        ) : (
          <p>Não está em horário de aula no momento.</p>
        )}
      </Title>
    </Container>
  );
};