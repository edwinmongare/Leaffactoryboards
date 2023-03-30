import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import AppTopbar from '../layout/AppTopbar';
import { apiProductionUrl, apiDevUrl } from '../apiConfig';

const Dashboard = () => {
 const [combinedData, setCombinedData] = useState([]);
 const [lastUpdate, setLastUpdate] = useState(Date.now());
 const [v1, setv1] = useState([]);
 const [v2, setv2] = useState([]);
 const batBlue = '#0E2B63';

 useEffect(() => {
  const interval = setInterval(() => {
   setLastUpdate(Date.now());
  }, 3000);
  return () => clearInterval(interval);
 }, []);

 useEffect(() => {
  Promise.all([
   axios.get(`${apiDevUrl}degredationv1`, { params: { lastUpdate } }),
   axios.get(`${apiDevUrl}degredationv2`, { params: { lastUpdate } })
  ])
   .then(([response1, response2]) => {
    setv1(response1.data);
    setv2(response2.data);
   })
   .catch((error) => {
    console.log(error);
   });
 }, [lastUpdate]);

 useEffect(() => {
  const combined = [];
  for (let i = 0; i < v1.length; i++) {
   combined.push({
    ...v1[i],
    ...v2[i]
   });
  }
  setCombinedData(combined);
 }, [v1, v2]);

 if (!combinedData) {
  return <div>Loading...</div>;
 }

 return (
  <div style={{ display: 'flex', height: '100vh', flexDirection: 'row', flexWrap: 'wrap' }}>
   <AppTopbar pageTitle=" CNC & Threshing – Visual Moistures & PSD" />
   <div
    style={{
     height: '50vh',
     width: '100%',
     overflow: 'auto',
     display: 'flex',
     flexDirection: 'row',
     flexWrap: 'wrap'
     //  borderBottom: '5px solid #0E2B63'
    }}
   >
    {v1.map((item) => (
     <motion.div
      key={item.id}
      initial={{ opacity: 20, y: 100 }}
      animate={{
       opacity: 1,
       y: 0
      }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="col-4 xl:col-4 mt-2"
     >
      <div style={{ backgroundColor: `white` }} className={`card mt-0 shadow-3 `}>
       <ul className="p-0 mx-0 mt-0 mb-1 list-none">
        <li className="flex align-items-center py-0 border-bottom-1 surface-border">
         <div
          className={`w-2rem h-2rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0>`}
         >
          <i className={`pi pi-clock text-xl text-blue-400`} />
         </div>
         <span className="text-900 text-black font-bold line-height-3">
          Time : {format(new Date(item.time_inserted), 'HH:mm:ss')}
         </span>
        </li>
        <li className="flex align-items-center py-0 border-bottom-1 surface-border">
         <div
          className={`w-2rem h-2rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0>`}
         >
          <i className={`pi pi-clock text-xl text-blue-400`} />
         </div>
         <span className="text-900 text-black font-bold line-height-3">
          EXIT 1st : {Number(item['EXIT 1st CC']).toFixed(2)}
         </span>
        </li>
        <li className="flex align-items-center py-0 border-bottom-1 surface-border">
         <div
          className={`w-2rem h-2rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0>`}
         >
          <i className={`pi pi-clock text-xl text-blue-400`} />
         </div>
         <span className="text-900 text-black font-bold line-height-3">
          TEMP 1st: {Number(item['TEMP 1st CC']).toFixed(2)}
         </span>
        </li>

        <li className="flex align-items-center py-0 border-bottom-1 surface-border">
         <div
          className={`w-2rem h-2rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0>`}
         >
          <i className={`pi pi-clock text-xl text-blue-400`} />
         </div>
         <span className="text-900 text-black font-bold line-height-3">
          EXIT 2nd: {Number(item['EXIT 2nd CC']).toFixed(2)}
         </span>
        </li>
        <li className="flex align-items-center py-0 border-bottom-1 surface-border">
         <div
          className={`w-2rem h-2rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0>`}
         >
          <i className={`pi pi-clock text-xl text-blue-400`} />
         </div>
         <span className="text-900 text-black font-bold line-height-3">
          TEMP 2nd: {Number(item['TEMP  2nd CC']).toFixed(2)}
         </span>
        </li>
       </ul>
      </div>
     </motion.div>
    ))}
   </div>

   <div
    style={{
     height: '50vh',
     width: '100%',
     overflow: 'auto',
     display: 'flex',
     flexDirection: 'row',
     flexWrap: 'wrap'
    }}
   >
    {v2.map((item) => (
     <motion.div
      key={item.id}
      initial={{ opacity: 20, y: 100 }}
      animate={{
       opacity: 1,
       y: 0
      }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="col-4 xl:col-4 mt-2"
     >
      <div style={{ backgroundColor: `white` }} className={`card mt-0 shadow-3 `}>
       <ul className="p-0 mx-0 mt-0 mb-1 list-none">
        <li className="flex align-items-center py-0 border-bottom-1 surface-border">
         <div
          className={`w-2rem h-2rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0>`}
         >
          <i className={`pi pi-clock text-xl text-blue-400`} />
         </div>
         <span className="text-900 text-black font-bold line-height-3">
          Time : {format(new Date(item.time_inserted), 'HH:mm:ss')}
         </span>
        </li>
        <li className="flex align-items-center py-0 border-bottom-1 surface-border">
         <div
          className={`w-2rem h-2rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0>`}
         >
          <i className={`pi pi-clock text-xl text-blue-400`} />
         </div>
         <span className="text-900 text-black font-bold line-height-3">
          Over 1/2 :{item['Over 1/2" Actual'].toFixed(2)}
         </span>
        </li>
        <li className="flex align-items-center py-0 border-bottom-1 surface-border">
         <div
          className={`w-2rem h-2rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0>`}
         >
          <i className={`pi pi-clock text-xl text-blue-400`} />
         </div>
         <span className="text-900 text-black font-bold line-height-3">
          Thro' 1/4: {item['Thro\' 1/4" Actual'].toFixed(2)}
         </span>
        </li>

        <li className="flex align-items-center py-0 border-bottom-1 surface-border">
         <div
          className={`w-2rem h-2rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0>`}
         >
          <i className={`pi pi-clock text-xl text-blue-400`} />
         </div>
         <span className="text-900 text-black font-bold line-height-3">
          Thro' 1/4 : {item['Thro\' 1/4" Actual'].toFixed(2)}
         </span>
        </li>
        <li className="flex align-items-center py-0 border-bottom-1 surface-border">
         <div
          className={`w-2rem h-2rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0>`}
         >
          <i className={`pi pi-clock text-xl text-blue-400`} />
         </div>
         <span className="text-900 text-black font-bold line-height-3">
          OBJ : {item['OBJ  Actual'].toFixed(2)}
         </span>
        </li>
       </ul>
      </div>
     </motion.div>
    ))}
   </div>
  </div>
 );
};

export default Dashboard;
