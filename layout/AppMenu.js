import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import axios from 'axios';
import getConfig from 'next/config';
import { MenuProvider } from './context/menucontext';
import { apiProductionUrl, apiDevUrl } from '../apiConfig';

const AppMenu = () => {
 const contextPath = getConfig().publicRuntimeConfig.contextPath;
 const [combinedData, setCombinedData] = useState([]);
 const [dailyData, setDailyData] = useState([]);
 const [meanData, setMeanData] = useState([]);
 const [lastUpdate, setLastUpdate] = useState(Date.now());
 const [triggerStatus, setTriggerStatus] = useState([]);
 const [safetyTriggerStatus, setSafetyTriggerStatus] = useState([]);

 useEffect(() => {
  const interval = setInterval(() => {
   setLastUpdate(Date.now());
  }, 3000);
  return () => clearInterval(interval);
 }, []);

 useEffect(() => {
  axios
   .get(`${apiDevUrl}getDailyProcessData`, {
    params: { lastUpdate }
   })
   .then((response) => {
    setDailyData(response.data);
   })
   .catch((error) => {
    console.log(error);
   });

  axios
   .get(`${apiDevUrl}getMeanAndSD`, {
    params: { lastUpdate }
   })
   .then((response) => {
    setMeanData(response.data);
   })
   .catch((error) => {
    console.log(error);
   });
 }, [lastUpdate]);

 useEffect(() => {
  const combined = dailyData.map((dailyItem, index) => ({
   ...dailyItem,
   ...meanData[index]
  }));
  setCombinedData(combined);
 }, [dailyData, meanData]);

 useEffect(() => {
  axios
   .get(`${apiDevUrl}getQualityTrigger`, {
    params: { lastUpdate }
   })
   .then((response) => {
    setTriggerStatus(response.data);
   })
   .catch((error) => {
    console.log(error);
   });
 }, [lastUpdate]);

 useEffect(() => {
  axios
   .get(`${apiDevUrl}getSafetyTrigger`, {
    params: { lastUpdate }
   })
   .then((response) => {
    setSafetyTriggerStatus(response.data);
   })
   .catch((error) => {
    console.log(error);
   });
 }, [lastUpdate]);

 return (
  <MenuProvider>
   <div className="grid">
    <div className="col-12 xl:col-12 mt-0">
     <div className="card shadow-3">
      {combinedData.map((item) => (
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
       >
        <ul className="p-0 mx-0 mt-0 mb-1 list-none">
         <li className="flex align-items-center py-0 border-bottom-1 surface-border">
          <div className="w-1rem h-1rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
           <i className="pi pi-clock text-xl text-blue-500" />
          </div>

          <span className="text-900 font-bold line-height-3">
           Date: {format(new Date(item.DATE), 'dd MMM yyyy')}
          </span>
         </li>
         <li className="flex align-items-center py-1 border-bottom-1 surface-border">
          <div className="w-1rem h-1rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
           <i className="pi pi-box text-xl text-blue-500" />
          </div>
          <span className="text-900 font-bold line-height-3">Grade:</span>
          <span className="text-900 font-bold line-height-3">{item.RUNNING_GRADE}</span>
         </li>
        </ul>
       </motion.div>
      ))}
     </div>
    </div>
    <div className="col-12 xl:col-12 mt-0 mb-0">
     <div className="card shadow-3 mb-0">
      {combinedData.map((item) => (
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
       >
        <ul className="p-0 mx-0 mt-0 mb-0  list-none">
         <li className="flex align-items-center py-1 border-bottom-1 surface-border">
          <div
           className={`w-1rem h-1rem flex align-items-center justify-content-center bg-${
            item.mean >= 13.2 && item.mean <= 13.8 ? '' : item.mean < 13.2 ? 'green' : 'red'
           }700 border-circle mr-3 flex-shrink-0`}
          >
           <i
            className={`pi pi-chart-line text-xl text-${
             item.mean >= 13.2 && item.mean <= 13.8 ? '' : item.mean < 13.2 ? 'green' : 'red'
            }-700`}
           />
          </div>
          <span
           className={`text-900 font-bold line-height-3 ${
            item.mean >= 13.2 && item.mean <= 13.8
             ? ''
             : item.mean < 13.2
             ? 'text-green-700'
             : 'text-red-700'
           }`}
          >
           Moisture Mean: {item.mean?.toFixed(2)}
          </span>
         </li>
         <li className="flex align-items-center py-1 border-bottom-1 surface-border">
          <div
           className={`w-1rem h-1rem flex align-items-center justify-content-center bg-${
            item.sd > 0.16 ? 'text-red-500' : 'text-green-500'
           }-100 border-circle mr-3 flex-shrink-0`}
          >
           <i
            className={`pi pi-chart-bar text-xl text-blue-500 ${
             item.sd > 0.16 ? 'text-red-500' : 'text-green-500'
            }`}
           />
          </div>
          <span
           className={`text-900 font-bold line-height-3 ${
            item.sd > 0.16 ? 'text-red-500' : 'text-green-500'
           }`}
          >
           Moisture SD : {item.sd?.toFixed(2)}
          </span>
         </li>
        </ul>
       </motion.div>
      ))}
     </div>
    </div>
   </div>
   <div className="grid card shadow-3 p-2 mx-0 mt-4">
    <div className="col-6 xl:col-6 mb-0 max-h-0.5 ">
     <div className="col-12 xl:col-12">
      <h3 className="text-lg subpixel-antialiased font-bold">Safety Trigger</h3>
     </div>
     {safetyTriggerStatus.map((item) => (
      <span className="">
       {item.trigger_status === 'Low' && (
        <img
         className="w-full mt-0"
         src={`${contextPath}/layout/images/traffic_lifghts/low quality.svg`}
         alt="Low Quality"
        />
       )}
       {item.trigger_status === 'Medium' && (
        <img
         className="w-full mt-0"
         src={`${contextPath}/layout/images/traffic_lifghts/mediuim_quality.svg`}
         alt="Medium Quality"
        />
       )}
       {item.trigger_status === 'High' && (
        <img
         className="w-full mt-0"
         src={`${contextPath}/layout/images/traffic_lifghts/high_quality.svg`}
         alt="High Quality"
        />
       )}
      </span>
     ))}
    </div>
    <div className="col-6 xl:col-6 mb-0 max-h-0.5 ">
     <div className="col-12 xl:col-12">
      <h3 className="text-lg subpixel-antialiased font-bold">Quality Trigger</h3>
     </div>
     {triggerStatus.map((item) => (
      <span className="">
       {item.safety_trigger === 'Low' && (
        <img
         className="w-full mt-0"
         src={`${contextPath}/layout/images/traffic_lifghts/LowQuality.svg`}
         alt="Low Safety Trigger"
        />
       )}
       {item.safety_trigger === 'High' && (
        <img
         className="w-full mt-0"
         src={`${contextPath}/layout/images/traffic_lifghts/HighQuality.svg`}
         alt="High Safety Trigger"
        />
       )}
      </span>
     ))}
    </div>
   </div>
  </MenuProvider>
 );
};

export default AppMenu;
