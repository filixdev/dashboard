import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0; 
  width: 100%;
  border-top: 1px solid #ddd;
`;

const Day = styled.div<{ isToday?: boolean }>`
  font-size: 1.2rem;
  text-align: center;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 2rem 1rem;

  ${props =>
    props.isToday &&
    css`
      background-color: #62d5ff;
      font-weight: bold;
    `}
`;

const DaysOfWeek = styled(Day)`
  padding: 1rem 1rem;
`

const CalendarButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;

export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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
        <h2>{currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric', day: 'numeric' })}</h2>
        <CalendarButtonContainer>
          <button onClick={previousMonth}>Prev</button>
          <button onClick={backToday}>Today</button>
          <button onClick={nextMonth}>Next</button>
        </CalendarButtonContainer>
      </CalendarHeader>
      <CalendarGrid>
        {daysOfWeek.map(day => (
          <DaysOfWeek key={day}>{day}</DaysOfWeek>
        ))}
        {days}
      </CalendarGrid>
    </CalendarWrapper>
  );
};
