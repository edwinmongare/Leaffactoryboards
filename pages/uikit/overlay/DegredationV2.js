import React, { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { format } from 'date-fns';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import AppTopbar from '../../../layout/AppTopbar';
import { apiDevUrl, apiProductionUrl } from '../../../apiConfig';

const DegredationV2 = () => {
 const [displayDegred2, setDisplayDegred2] = useState(false);

 const toast = useRef(null);
 const today = new Date();
 const formattedDate = format(today, 'yyyy-MM-dd HH:mm:ss');

 const validationSchemaMoistures = Yup.object().shape({
  Q1: Yup.mixed().required('Case Number is required'),
  Q2: Yup.mixed().required('Moisture data is required'),
  Q3: Yup.mixed().required('Temperature data is required'),
  Q4: Yup.mixed().required('Temperature data is required'),
  time_inserted: Yup.date().required('Time is required')
 });

 const formikMoistures = useFormik({
  initialValues: {
   Q1: '',
   Q2: '',
   Q3: '',
   Q4: '',
   time_inserted: new Date()
  },
  validationSchema: validationSchemaMoistures,
  onSubmit: async (values, { setSubmitting, resetForm }) => {
   try {
    values.DATE = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    values.time_inserted = format(new Date(), 'yyyy-MM-dd HH:mm:ss'); // Set the current date and time
    const response = await axios.post(`${apiDevUrl}postDegredationv2`, values);
    console.log(response, 'response from api');
    if (response.status === 200) {
     toast.current.show({
      severity: 'success',
      summary: 'Data succesfully submited',
      detail: 'The form data has been posted successfully',
      life: 10000
     });
     resetForm();
    }
   } catch (error) {
    console.log(error);
    toast.current.show({
     severity: 'error',
     summary: 'Error',
     detail: 'There was an error posting the data. Please try again',
     life: 10000
    });
    console.log(error, 'error');
   } finally {
    setSubmitting(false);
    setDisplayDegred2(false);
   }
  }
 });

 return (
  <>
   <AppTopbar pageTitle=" Data Entry Page" />
   <Toast ref={toast} />

   <div className="card shadow-3">
    <h6 className="font-bold">Particle size </h6>

    <Dialog
     header="Particle size distribution"
     visible={displayDegred2}
     style={{ width: '60vw' }}
     modal
     onHide={() => setDisplayDegred2(false)}
    >
     <form onSubmit={formikMoistures.handleSubmit}>
      <div className="grid">
       <div className="col-12 md:col-12">
        <div className="card p-fluid">
         <div className="field">
          <label htmlFor="time_inserted">Time</label>
          <InputText
           id="time_inserted"
           name="time_inserted"
           disabled
           placeholder={formattedDate}
           type="text"
          />
         </div>
         <label htmlFor="Q1">Over 1/2</label>
         <div className="field">
          <InputText
           id="Q1"
           name="Q1"
           value={formikMoistures.values.Q1}
           onChange={formikMoistures.handleChange}
           placeholder={'Enter the Over 1/2 Number'}
           type="text"
          />
         </div>
         <div className="field">
          <label htmlFor="Q2">Thro' 1/4:</label>
          <InputText
           id="Q2"
           name="Q2"
           placeholder={'Enter the Thro 1/4: Number'}
           className="field"
           value={formikMoistures.values.Q2}
           onChange={formikMoistures.handleChange}
           type="text"
          />
         </div>
         <div className="field">
          <label htmlFor="Q3">SIL Actual:</label>
          <InputText
           id="Q3"
           name="Q3"
           placeholder={'Enter the SIL  Actual Number'}
           className="field"
           value={formikMoistures.values.Q3}
           onChange={formikMoistures.handleChange}
           type="text"
          />
         </div>
         <div className="field">
          <label htmlFor="Q4">OBJ Actual</label>
          <InputText
           id="Q4"
           name="Q4"
           placeholder={'Enter the OBJ Actual Number'}
           className="field"
           value={formikMoistures.values.Q4}
           onChange={formikMoistures.handleChange}
           type="text"
          />
         </div>
        </div>
       </div>
      </div>
      <Button
       className="border-double mt-4 border-4 border-sky-500 col-12 p-mt-2 p-button-primary"
       onClick={() => formikMoistures.handleSubmit()}
       icon="pi pi-check"
       disabled={formikMoistures.isSubmitting || !formikMoistures.isValid}
       type="submit"
       label="Submit"
      />
     </form>
    </Dialog>
    {console.log(formikMoistures.errors, 'jd2')}
    <div className="grid">
     <div className="col-12">
      <Button
       type="submit"
       label="Enter Data"
       icon="pi pi-external-link"
       onClick={() => setDisplayDegred2(true)}
      />
     </div>
    </div>
   </div>
  </>
 );
};

export default DegredationV2;
