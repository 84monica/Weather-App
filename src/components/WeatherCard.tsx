import styled from 'styled-components';

const Card = styled.div`
  background-color: #7bb4ef;
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Day = styled.h1`
  font-size: 24px;
  color: white;
`;

const Temperature = styled.p`
  font-size: 18px;
  color: white;
`;

const WeatherCard = ({ day , temperatures, setSelectedDay}: { day: string, temperatures: string, setSelectedDay: React.Dispatch<React.SetStateAction<string>> }) => {
  const handleClick = () => {
    setSelectedDay(day);
  };

  return (
    <Card onClick={handleClick}>
      <Day>{day}</Day>
      <Temperature>{temperatures}</Temperature>
    </Card>
  );
}

export default WeatherCard;