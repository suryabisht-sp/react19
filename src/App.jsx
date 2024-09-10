import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./utility/Data.json"
import Card from './component/Card'
import ListItems from './component/List'
import Header from './component/Header'

function App() {
  const [time, setTime] = useState({ hours: '', minutes: '', seconds: '', formattedDate: '', period: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toDateString();
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const period = hours >= 12 ? 'PM' : 'AM';

      // Convert hours to 12-hour format
      hours = hours % 12 || 12;

      setTime({
        formattedDate,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
        period,
      });
    }, 1000);
    
    // to remove the memory leak we have used useeffect 
    return () => clearInterval(interval);
  }, []);

  // color for seconds
  const getSecondsColor = () => {
    const seconds = parseInt(time.seconds);
    if (seconds < 10) return 'green';
    if (seconds >= 10 && seconds < 30) return 'navy';
    if (seconds >= 30 && seconds < 50) return 'orange';
    return 'red';
  };

  // color for minutes
  const getMinutesColor = () => {
    const minutes = parseInt(time.minutes);
    return minutes < 55 ? 'green' : 'red';
  };

  // Shared style for time elements
  const timeStyle = (color) => ({
    backgroundColor: color,
    borderRadius: '5px',
    color: '#fff',
    padding: '0 5px',
  });

  const getHoursColor = () => {
    const hours = parseInt(time.hours);
    return hours < 10 ? 'green' : 'purple'; 
  };
 
  const getDateColor = () => {
   if(time.period === "PM")
   {
    return 'green'
   }
   else 
   return 'purple'; 
  };


  return (
    <>
      <div className='header'>
        <Header />
      </div>
      <h2 className='date-time'>
        <span style={timeStyle(getDateColor())}> {time.formattedDate}</span>{" "} -  {" "}
        <span style={timeStyle(getHoursColor())}>{time.hours}</span>:
        <span style={timeStyle(getMinutesColor())}>{time.minutes}</span>:
        <span style={timeStyle(getSecondsColor())}>{time.seconds}</span> {time.period}
      </h2>
      <div className='container'>
        <ListItems />
      </div>
    </>
  );
}

export default App;
