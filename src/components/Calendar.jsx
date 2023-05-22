import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <Calendar
          onChange={onChange}
          value={value}
          locale="en-US"
        />
      </div>
    </div>
  );
}

export default MyCalendar;
