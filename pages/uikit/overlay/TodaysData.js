import React, { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { format } from 'date-fns';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import QualityTrigger from './QualityTrigger';
import AppTopbar from '../../../layout/AppTopbar';
import { apiDevUrl, apiProductionUrl } from '../../../apiConfig';
import SafetyTrigger from './safetyTrigger';
const TodaysData = () => {
 const [displayBasic, setDisplayBasic] = useState(false);
 const [displayBasic2, setDisplayBasic2] = useState(false);

 const [dropdownItem, setDropdownItems] = useState(null);

 const toast = useRef(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await axios.get(`${apiDevUrl}getGrades`);
    const options = response.data.map((item) => ({ label: item.Grade }));
    setDropdownItems(options);
   } catch (error) {
    console.log(error);
   }
  };
  fetchData();
 }, []);
 //  console.log(dropdownItem, 'dropdown items');

 const today = new Date();
 const formattedDate = format(today, 'yyyy-MM-dd HH:mm:ss');

 const validationSchema = Yup.object().shape({
  RUNNING_GRADE: Yup.string().required('Grade is required'),
  PROCESS_CODE: Yup.mixed().required('Process code is required')
 });

 const formik = useFormik({
  initialValues: {
   DATE: `${formattedDate}`,
   RUNNING_GRADE: '',
   PROCESS_CODE: ''
  },
  validationSchema,
  onSubmit: async (values, { setSubmitting, resetForm }) => {
   try {
    values.DATE = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    const response = await axios.post(`${apiDevUrl}postDailyProcessData`, values);
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
     life: 5000
    });
    console.log(error, 'error');
   } finally {
    setSubmitting(false);
    setDisplayBasic(false);
   }
  }
 });

 return (
  <>
   <AppTopbar pageTitle="Data Entry Page" />
   <Toast ref={toast} />
   <div className="card shadow-3">
    <h6 className="font-bold">Today's Data</h6>

    <Dialog
     header="Todays Data"
     visible={displayBasic}
     style={{ width: '60vw' }}
     modal
     onHide={() => setDisplayBasic(false)}
    >
     <form onSubmit={formik.handleSubmit}>
      <div className="grid">
       <div className="col-12 md:col-12">
        <div className="card p-fluid">
         <div className="field">
          <label htmlFor="name1">Date</label>
          <InputText id="name1" disabled placeholder={formattedDate} type="text" />
         </div>
         <label htmlFor="name1">Grade</label>

         <Dropdown
          id="RUNNING_GRADE"
          className="field"
          value={formik.values.RUNNING_GRADE}
          onChange={(e) => {
           formik.setFieldValue('RUNNING_GRADE', e.value.label);
           console.log(e.value.label, 'selected value');
          }}
          options={dropdownItem}
          optionLabel="label"
          placeholder={formik.values.RUNNING_GRADE}
         />

         <div className="field">
          <label htmlFor="age1">Process Code</label>
          <InputText
           id="PROCESS_CODE"
           className="field"
           value={formik.values.PROCESS_CODE}
           onChange={formik.handleChange}
           type="text"
          />
         </div>
        </div>
       </div>
      </div>
      <Button
       className="border-double mt-4 border-4 border-sky-500 col-12 p-mt-2 p-button-primary"
       onClick={() => formik.handleSubmit()}
       icon="pi pi-check"
       disabled={formik.isSubmitting || !formik.isValid}
       type="submit"
       label="Submit"
      />
     </form>
    </Dialog>
    {console.log(formik.errors, 'jd')}
    <div className="grid">
     <div className="col-12">
      <Button
       type="submit"
       label="Enter Data"
       icon="pi pi-external-link"
       onClick={() => setDisplayBasic(true)}
      />
     </div>
    </div>
   </div>
  </>
 );
};

export default TodaysData;
