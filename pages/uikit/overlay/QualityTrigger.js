import React, { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { format } from 'date-fns';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { apiDevUrl, apiProductionUrl } from '../../../apiConfig';

const QualityTrigger = () => {
 const toast = useRef(null);
 const [qaBasic, setQaBasic] = useState(false);
 const validationSchema = Yup.object().shape({
  Q1: Yup.string().required('yes or No answer required'),
  Q2: Yup.string().required('yes or No answer required'),
  Q3: Yup.string().required('yes or No answer required'),
  Q4: Yup.string().required('yes or No answer required'),
  Q5: Yup.string().required('yes or No answer required'),
  Q6: Yup.string().required('yes or No answer required'),
  Q7: Yup.string().required('yes or No answer required'),
  Q8: Yup.string().required('yes or No answer required'),
  Q9: Yup.date().required('Date and time required'),
  Q10: Yup.string().notRequired()
 });
 const formik = useFormik({
  initialValues: {
   Q1: '',
   Q2: '',
   Q3: '',
   Q4: '',
   Q5: '',
   Q6: '',
   Q7: '',
   Q8: '',
   Q9: new Date(),
   Q10: ''
  },
  validationSchema,
  onSubmit: async (values, { setSubmitting, resetForm }) => {
   try {
    values.Q8 = updateQ8();
    values.Q9 = format(new Date(), 'yyyy-MM-dd HH:mm');
    const response = await axios.post(`${apiDevUrl}postQualityTrigger`, values);
    console.log(response.data, 'response from api');
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
    setQaBasic(false);
   }
  }
 });
 const QualityTriggerOptions = [
  { id: '1', Name: 'Yes' },
  { id: '2', Name: 'No' }
 ];

 const today = new Date();
 const formattedDate = format(today, 'yyyy-MM-dd HH:mm:ss');
 const updateQ8 = () => {
  const { Q1, Q2, Q3, Q4, Q5, Q6, Q7 } = formik.values;
  let updatedValue = '';
  if (
   Q1 === 'No' &&
   Q2 === 'No' &&
   Q3 === 'No' &&
   Q4 === 'No' &&
   Q5 === 'No' &&
   Q6 === 'No' &&
   Q7 === 'Yes'
  ) {
   updatedValue = 'Low';
  } else {
   updatedValue = 'High';
  }
  formik.setFieldValue('Q8', updatedValue);
  return updatedValue;
 };

 useEffect(() => {
  updateQ8();
 }, [
  formik.values.Q1,
  formik.values.Q2,
  formik.values.Q3,
  formik.values.Q4,
  formik.values.Q5,
  formik.values.Q6,
  formik.values.Q7
 ]);
 console.log(formik.values.Q10, 'q10');
 return (
  <>
   <Toast ref={toast} />
   <div className="card shadow-3">
    <h6 className="font-bold">Quality Trigger</h6>
    <Dialog
     header={`Quality Trigger  (${formik.values.Q8})`}
     visible={qaBasic}
     style={{ width: '70vw' }}
     modal
     onHide={() => setQaBasic(false)}
    >
     <form onSubmit={formik.handleSubmit}>
      <div className="grid">
       <div className="col-12 md:col-12">
        <div className="card mb-3 p-fluid">
         <div className="field grid">
          <div className="col-12 md:col-12">
           <label htmlFor="Q9">Date</label>
           <InputText className="field" id="Q9" readOnly placeholder={formattedDate} type="text" />
          </div>
          <div className="col-6 md:col-6">
           <label className="mb-5" htmlFor="Q8">
            Trigger Status
           </label>
           <InputText id="Q8" hidden className="field" value={formik.values.Q8} type="text" />
          </div>
         </div>

         <div className="field">
          <label htmlFor="Q1">
           1. Are we having a weekly startup/have we had any maintenance jobs?
          </label>
          <Dropdown
           id="Q1"
           className="field"
           value={formik.values.Q1}
           onChange={(e) => {
            formik.setFieldValue('Q1', e.value.Name);
            console.log(formik.values.Q1, 'selectedxxx value');
           }}
           options={QualityTriggerOptions}
           optionLabel="Name"
           placeholder={formik.values.Q1}
          />
         </div>
         <div className="field">
          <label htmlFor="Q2">2. Do we expect to have a sample run</label>
          <Dropdown
           id="Q2"
           className="field"
           value={formik.values.Q2}
           onChange={(e) => {
            formik.setFieldValue('Q2', e.value.Name);
            console.log(e.value.Name, 'selectedxxx value');
           }}
           options={QualityTriggerOptions}
           optionLabel="Name"
           placeholder={formik.values.Q2}
          />
         </div>
         <div className="field">
          <label htmlFor="Q3">3. Did we have a quality incident or NCP from previous shift</label>
          <Dropdown
           id="Q3"
           className="field"
           value={formik.values.Q3}
           onChange={(e) => {
            formik.setFieldValue('Q3', e.value.Name);
            console.log(e.value.Name, 'selectedxxx value');
           }}
           options={QualityTriggerOptions}
           optionLabel="Name"
           placeholder={formik.values.Q3}
          />
         </div>
         <div className="field">
          <label htmlFor="Q4">4. Do we have a new team member</label>
          <Dropdown
           id="Q4"
           className="field"
           value={formik.values.Q4}
           onChange={(e) => {
            formik.setFieldValue('Q4', e.value.Name);
            console.log(e.value.Name, 'selectedxxx value');
           }}
           options={QualityTriggerOptions}
           optionLabel="Name"
           placeholder={formik.values.Q4}
          />
         </div>
         <div className="field">
          <label htmlFor="Q5">5. Do we have a grade change/style change?</label>
          <Dropdown
           id="Q5"
           className="field"
           value={formik.values.Q5}
           onChange={(e) => {
            formik.setFieldValue('Q5', e.value.Name);
            console.log(e.value.Name, 'selectedxxx value');
           }}
           options={QualityTriggerOptions}
           optionLabel="Name"
           placeholder={formik.values.Q5}
          />
         </div>
         <div className="field">
          <label htmlFor="Q6">
           6. Are there any other activities going on that may impact QA process and product quality
           i.e. mop up, line optimization, high NTRM alert from farm, loose materials, wearing
           machine parts belts etc., infestation above threshold (&gt;1.0 CPT), reefed or
           contamination
          </label>

          <Dropdown
           id="Q6"
           className="field"
           value={formik.values.Q6}
           onChange={(e) => {
            formik.setFieldValue('Q6', e.value.Name);
            console.log(e.value.Name, 'selectedxxx value');
           }}
           options={QualityTriggerOptions}
           optionLabel="Name"
           placeholder={formik.values.Q6}
          />
         </div>
         <div className="field">
          <label htmlFor="Q7">7. Are all moisture meters working OK</label>
          <Dropdown
           id="Q7"
           className="field"
           value={formik.values.Q7}
           onChange={(e) => {
            formik.setFieldValue('Q7', e.value.Name);
            console.log(e.value.Name, 'selectedxxx value');
           }}
           options={QualityTriggerOptions}
           optionLabel="Name"
           placeholder={formik.values.Q7}
          />
         </div>
         {formik.values.Q8 === 'High' ? (
          <div className="field">
           <label className="mt-0" htmlFor="Q10">
            8. Kindly enter the reason for the setting a high quality trigger
           </label>
           <InputText
            className="field"
            id="Q10"
            name="Q10"
            value={formik.values.Q10}
            onChange={formik.handleChange}
           />
          </div>
         ) : null}
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
    {console.log(formik.errors, 'qa errors')}
    <div className="grid">
     <div className="col-12">
      <Button
       type="submit"
       label="Enter Data"
       icon="pi pi-external-link"
       onClick={() => setQaBasic(true)}
      />
     </div>
    </div>
   </div>
  </>
 );
};

export default QualityTrigger;
