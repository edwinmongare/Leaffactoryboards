import React, { useState, useEffect } from 'react';

const Greetings = ({ initialTime }) => {
 const [time, setTime] = useState(new Date(initialTime));

 useEffect(() => {
  const timerID = setInterval(() => tick(), 1000);
  return () => clearInterval(timerID);
 });

 const tick = () => {
  setTime(new Date());
 };

 const formatTime = (time) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const amOrPm = hours < 12 ? 'AM' : 'PM';
  const formattedHours = hours % 12 || 12;
  return `${formattedHours < 10 ? '0' + formattedHours : formattedHours}:${
   minutes < 10 ? '0' + minutes : minutes
  }:${seconds < 10 ? '0' + seconds : seconds} ${amOrPm}`;
 };

 const getGreeting = () => {
  const hour = time.getHours();

  if (hour < 12) {
   return 'Good Morning,';
  } else if (hour < 18) {
   return 'Good Afternoon,';
  } else {
   return 'Good Evening,';
  }
 };

 return (
  <div className="card shadow-3 col-12 flex flex-row items-center">
   <div className="flex-1">
    <h5 className="mb-0 text-xl text-blue-700 font-bold ">{getGreeting()}</h5>
    <h5 className="mb-0 text-xl text-black-700 font-bold ">What would you like to do today?</h5>
   </div>
   <div className="flex-1">
    <h5 className="mb-0 text-right text-lg text-black-700 mb-0">Time:{formatTime(time)}</h5>
   </div>
  </div>
 );
};

export default Greetings;
