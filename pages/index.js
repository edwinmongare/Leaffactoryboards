import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import AppTopbar from '../layout/AppTopbar';
import { apiProductionUrl, apiDevUrl } from '../apiConfig';
const Dashboard = () => {
 const [data, setData] = useState([]);
 const [lastUpdate, setLastUpdate] = useState(Date.now());

 useEffect(() => {
  const interval = setInterval(() => {
   setLastUpdate(Date.now());
  }, 3000);
  return () => clearInterval(interval);
 }, []);

 useEffect(() => {
  axios
   .get(`${apiDevUrl}getMoisturesData`, {
    params: { lastUpdate }
   })
   .then((response) => {
    setData(response.data);
   })
   .catch((error) => {
    console.log(error);
   });
 }, [lastUpdate]);

 const getMoistureStatus = (moisture) => {
  if ((moisture >= 11.81 && moisture <= 12.99) || (moisture >= 13.9 && moisture <= 14.19)) {
   return { bgColor: '#c36f09', iconColor: 'yellow' };
  } else if (moisture >= 13.0 && moisture <= 13.89) {
   return { bgColor: '#10451d', iconColor: 'green' };
  } else {
   return { bgColor: '#780116', iconColor: 'red' };
  }
 };

 return (
  <div className="grid">
   <AppTopbar pageTitle=" Drying & Packing – Visual Moistures & Temp" />
   {data.map((item) => (
    <motion.div
     key={item.id}
     initial={{ opacity: 20, y: 100 }}
     animate={{
      opacity: 1,
      y: 0
     }}
     transition={{ duration: 1.5, delay: 0.3 }}
     className="col-3 xl:col-3 mt-2"
    >
     <div
      style={{ backgroundColor: `${getMoistureStatus(item.MOISTURE).bgColor}` }}
      className={`card mt-0 shadow-3 `}
     >
      <ul className="p-0 mx-0 mt-0 mb-1 list-none">
       <li className="flex align-items-center py-0 border-bottom-1 surface-border">
        <div
         className={`w-2rem h-2rem flex align-items-center justify-content-center bg-${
          getMoistureStatus(item.MOISTURE).iconColor
         }-100 border-circle mr-3 flex-shrink-0>`}
        >
         <i
          className={`pi pi-clock text-xl text-${getMoistureStatus(item.MOISTURE).iconColor}-400`}
         />
        </div>
        <span className="text-200  text-white font-bold line-height-3">
         Time : {format(new Date(item.TIME_INSERTED), 'HH:mm')}
        </span>
       </li>
       <li className="flex align-items-center py-1 border-bottom-1 surface-border">
        <div
         className={`w-2rem h-2rem flex align-items-center justify-content-center bg-${
          getMoistureStatus(item.MOISTURE).iconColor
         }-100 border-circle mr-3 flex-shrink-0>`}
        >
         <i
          className={`pi pi-box text-xl text-${getMoistureStatus(item.MOISTURE).iconColor}-400`}
         />
        </div>
        <span className="text-900 text-white font-bold line-height-3">
         Case No : {item.CASE_NO}
        </span>
       </li>
       <li className="flex align-items-center py-1 border-bottom-1 surface-border">
        <div
         className={`w-2rem h-2rem flex align-items-center justify-content-center bg-${
          getMoistureStatus(item.MOISTURE).iconColor
         }-100 border-circle mr-3 flex-shrink-0>`}
        >
         <i
          className={`pi pi-chart-line text-xl text-${
           getMoistureStatus(item.MOISTURE).iconColor
          }-400`}
         />
        </div>
        <span className="text-900 text-white font-bold line-height-3">
         Moisture : {item.MOISTURE}
        </span>
       </li>
       <li className="flex align-items-center py-1 border-bottom-1 surface-border">
        <div
         className={`w-2rem h-2rem flex align-items-center justify-content-center bg-${
          getMoistureStatus(item.MOISTURE).iconColor
         }-100 border-circle mr-3 flex-shrink-0>`}
        >
         <i
          className={`pi pi-chart-bar text-xl text-${
           getMoistureStatus(item.MOISTURE).iconColor
          }-400`}
         />
        </div>
        <span className="text-900 text-white font-bold line-height-3">
         Temp : {item.TEMPERATURE}
        </span>
       </li>
      </ul>
     </div>
    </motion.div>
   ))}
  </div>
 );
};

export default Dashboard;
