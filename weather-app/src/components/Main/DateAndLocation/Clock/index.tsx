import React, { useEffect, useState } from 'react';

import { text } from 'constant';

import { StyledAmPm, StyledClock, StyledTime } from './style';

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledClock>
      <StyledTime>{date.toLocaleTimeString()}</StyledTime>
      <StyledAmPm>{date.getHours() > 12 ? text.pm : text.am}</StyledAmPm>
    </StyledClock>
  );
};

export default Clock;
