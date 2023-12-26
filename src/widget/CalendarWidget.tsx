import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 6px;
  width: 100%;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Day = styled.div<{ isToday?: boolean }>`
  padding: 6px;
  text-align: center;

  ${props =>
    props.isToday &&
    css`
      background-color: #62d5ff;
      font-weight: bold;
    `}
`;

const CalendarButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;

export const CalendarWidget: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<Day key={`empty-${i}`} />);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const isToday = today.getDate() === i && today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear();
    days.push(<Day key={i} isToday={isToday}>{i}</Day>);
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const backToday = () => {
    setCurrentDate(today)
  }

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <h3>{currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric', day: 'numeric' })}</h3>
        <CalendarButtonContainer>
          <button onClick={previousMonth}>Prev</button>
          <button onClick={backToday}>Today</button>
          <button onClick={nextMonth}>Next</button>
        </CalendarButtonContainer>
      </CalendarHeader>
      <CalendarGrid>
        {daysOfWeek.map(day => (
          <Day key={day}>{day}</Day>
        ))}
        {days}
      </CalendarGrid>
    </CalendarWrapper>
  );
};
