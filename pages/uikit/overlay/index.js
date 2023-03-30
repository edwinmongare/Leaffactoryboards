import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import QualityTrigger from './QualityTrigger';
import AppTopbar from '../../../layout/AppTopbar';
import SafetyTrigger from './safetyTrigger';
import TodaysData from './TodaysData';
import MoisturesData from './MoisturesData';
import DegredationV1 from './DegredationV1';
import DegredationV2 from './DegredationV2';
import Greetings from './Greetings';
const OverlayDemo = () => {
 const toast = useRef(null);

 return (
  <>
   <AppTopbar pageTitle="Data Entry Page" />
   <Toast ref={toast} />
   <div className="grid">
    <div className="col-12 lg:col-12">
     <Greetings />
    </div>
    <div className="col-12 lg:col-4">
     <TodaysData />
    </div>
    <div className="col-12 lg:col-4">
     <QualityTrigger />
    </div>
    <div className="col-12 lg:col-4">
     <SafetyTrigger />
    </div>
    <div className="col-12 lg:col-4">
     <MoisturesData />
    </div>
    <div className="col-12 lg:col-4">
     <DegredationV1 />
    </div>
    <div className="col-12 lg:col-4">
     <DegredationV2 />
    </div>
    <div className="col-12 lg:col-12">
     <Toast ref={toast} />
    </div>
   </div>
  </>
 );
};

export default OverlayDemo;
