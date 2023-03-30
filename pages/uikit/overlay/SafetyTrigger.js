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
import { apiDevUrl, apiProductionUrl } from '../../../apiConfig';

const SafetyTrigger = () => {
 const toast = useRef(null);
 const [safetyBasic, setSafetyBasic] = useState(false);
 const validationSchema = Yup.object().shape({
  Q1: Yup.string().required('yes or No answer required'),
  Q2: Yup.string().required('yes or No answer required'),
  Q3: Yup.string().required('yes or No answer required'),
  Q4: Yup.string().required('yes or No answer required'),
  Q5: Yup.string().required('yes or No answer required'),
  Q6: Yup.string().required('yes or No answer required'),
  Q7: Yup.string().required('yes or No answer required'),
  Q8: Yup.string().required('yes or No answer required'),
  Q9: Yup.string().required('yes or No answer required'),
  Q10: Yup.string().required('yes or No answer required'),
  Q11: Yup.string(),
  Q12: Yup.date().required('Date and time required'),
  Q13: Yup.string().required('yes or No answer required')
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
   Q9: '',
   Q10: '',
   Q11: '',
   Q12: new Date(),
   Q13: ''
  },
  validationSchema,
  onSubmit: async (values, { setSubmitting, resetForm }) => {
   try {
    values.Q13 = updateQ13();
    values.Q9 = format(new Date(), 'yyyy-MM-dd HH:mm');
    const response = await axios.post(`${apiDevUrl}safetyTrigger`, values);
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
    setSafetyBasic(false);
   }
  }
 });
 const QualityTriggerOptions = [
  { id: 'Yes', Name: '1' },
  { id: 'No', Name: '0' }
 ];

 const today = new Date();
 const formattedDate = format(today, 'yyyy-MM-dd HH:mm:ss');
 const updateQ13 = () => {
  const { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10 } = formik.values;
  let updatedValue = '';

  const sum =
   parseInt(Q1) +
   parseInt(Q2) +
   parseInt(Q3) +
   parseInt(Q4) +
   parseInt(Q5) +
   parseInt(Q6) +
   parseInt(Q7) +
   parseInt(Q8) +
   parseInt(Q9) +
   parseInt(Q10);

  if (sum <= 3) {
   updatedValue = 'Low';
  } else if (sum >= 4 && sum <= 6) {
   updatedValue = 'Medium';
  } else {
   updatedValue = 'High';
  }

  formik.setFieldValue('Q13', updatedValue);
  return updatedValue;
 };

 useEffect(() => {
  updateQ13();
 }, [
  formik.values.Q1,
  formik.values.Q2,
  formik.values.Q3,
  formik.values.Q4,
  formik.values.Q5,
  formik.values.Q6,
  formik.values.Q7,
  formik.values.Q8,
  formik.values.Q9,
  formik.values.Q10
 ]);
 console.log(formik.values.Q1, 'q1');
 return (
  <>
   <Toast ref={toast} />
   <div className="card shadow-3">
    <h6 className="font-bold">Safety Trigger</h6>
    <Dialog
     header={`Safety Trigger  (${formik.values.Q13})`}
     visible={safetyBasic}
     style={{ width: '80vw' }}
     modal
     onHide={() => setSafetyBasic(false)}
    >
     <form onSubmit={formik.handleSubmit}>
      <div className="grid">
       <div className="col-12 md:col-12">
        <div className="card mb-3 p-fluid">
         <div className="field grid">
          <div className="col-12 md:col-12">
           <label htmlFor="Q12">Date</label>
           <InputText className="field" id="Q12" readOnly placeholder={formattedDate} type="text" />
          </div>
          <div className="col-6 md:col-6">
           <label className="mb-5" htmlFor="Q12">
            Safety Trigger Status
           </label>
           <InputText id="Q13" hidden className="field" value={formik.values.Q13} type="text" />
          </div>
         </div>

         <div className="field">
          <label htmlFor="Q1">
           1. Are Routine operations ongoing, proper working tools, adequate PPE and
           qualified/adequate staffing?
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
          <label htmlFor="Q2">
           2. Are there Non routine operations eg maintenance, deep cleaning, breakdown
           <h3 className="text-sm  ml-2subpixel-antialiased text-red-400 font-regular">
            Complete the QRP form before commencement of the activity
           </h3>
          </label>
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
          <label htmlFor="Q3">
           3. NPI running with non factory staff on the floor
           <h3 className="text-sm  ml-2subpixel-antialiased text-red-400 font-regular">
            Conduct safety induction and team to be accompanied always by GLT Staff
           </h3>
          </label>

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
          <label htmlFor="Q4">
           4. Team staffing less than set standard or there is new staff on the line
           <h3 className="text-sm  ml-2subpixel-antialiased text-red-400 font-regular">
            Reallocation of the staff members to cover high risk areas New staff to shadow and be
            attached to the experienced staff members
           </h3>
          </label>
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
          <label htmlFor="Q5">
           5. Visitors in the factory area
           <h3 className="text-sm  ml-2subpixel-antialiased text-red-400 font-regular">
            Conduct safety induction and team to be accompanied always by GLT Staff
           </h3>
          </label>
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
           6. Machine start up
           <h3 className="text-sm  ml-2subpixel-antialiased text-red-400 font-regular">
            Follow start up procedure
           </h3>
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
          <label htmlFor="Q7">
           7. Near miss reported in the previous shift
           <h3 className="text-sm  ml-2subpixel-antialiased text-red-400 font-regular">
            Ensure effective communication to the line structure Implement corrective and preventive
            actions
           </h3>
          </label>

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
         <div className="field">
          <label htmlFor="Q8">
           8. Accident/First aid injury reported in previous shift
           <h3 className="text-sm  ml-2subpixel-antialiased text-red-400 font-regular">
            Stop all activities and only start after corrective/preventive actions have been
            implemented Plan for BOS to verify countermeasures remain in place
           </h3>
          </label>
          <Dropdown
           id="Q8"
           className="field"
           value={formik.values.Q8}
           onChange={(e) => {
            formik.setFieldValue('Q8', e.value.Name);
            console.log(e.value.Name, 'selectedxxx value');
           }}
           options={QualityTriggerOptions}
           optionLabel="Name"
           placeholder={formik.values.Q8}
          />
         </div>
         <div className="field">
          <label htmlFor="Q9">
           9. Safety interlock/guarding missing/failure
           <h3 className="text-sm  ml-2subpixel-antialiased text-red-400 font-regular">
            Stop all activities and only start after corrective/preventive actions have been
            implemented Plan for BOS to verify countermeasures remain in place
           </h3>
          </label>
          <Dropdown
           id="Q9"
           className="field"
           value={formik.values.Q9}
           onChange={(e) => {
            formik.setFieldValue('Q9', e.value.Name);
            console.log(e.value.Name, 'selectedxxx value');
           }}
           options={QualityTriggerOptions}
           optionLabel="Name"
           placeholder={formik.values.Q9}
          />
         </div>
         <div className="field">
          <label htmlFor="Q10">
           10. Environmental hazards e.g., smoke, fumes, oil spillage
           <h3 className="text-sm  ml-2subpixel-antialiased text-red-400 font-regular">
            Stop all activities and only start after corrective/preventive actions have been
            implemented Plan for BOS to verify countermeasures remain in place
           </h3>
          </label>
          <Dropdown
           id="Q10"
           className="field"
           value={formik.values.Q10}
           onChange={(e) => {
            formik.setFieldValue('Q10', e.value.Name);
            console.log(e.value.Name, 'selectedxxx value');
           }}
           options={QualityTriggerOptions}
           optionLabel="Name"
           placeholder={formik.values.Q10}
          />
         </div>
         {formik.values.Q13 === 'High' ? (
          <div className="field">
           <label className="mt-0" htmlFor="Q10">
            11. Kindly enter the reason for the setting a high safety trigger
           </label>
           <InputText
            className="field"
            id="Q11"
            name="Q11"
            value={formik.values.Q11}
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
       onClick={() => setSafetyBasic(true)}
      />
     </div>
    </div>
   </div>
  </>
 );
};

export default SafetyTrigger;
