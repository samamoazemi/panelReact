import './AddNewCountry.css';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { AddNewCountries } from 'services/countries/addNewCountries';
import SelectForm from 'common/SelectForm';

const initialValues = {
  persianTitle: '',
  title: '',
  code: '',
  state: '',
};

const validate = values => {
  let errors = {};

  if (!values.persianTitle) {
    errors.persianTitle = 'persian title is Required';
  }

  if (!values.title) {
    errors.title = 'title is Required';
  }

  if (!values.code) {
    errors.code = 'code is Required';
  }

  return errors;
};

const stateOptions = [
  { value: '0', label: 'فعال' },
  { value: 'Hi1king', label: 'غیر فعال' },
];
const AddNewCountry = () => {
  const [error, setError] = useState(null);

  const onSubmit = async values => {
    console.log(values);
    // try {
    //   const { data } = await AddNewCountries(values);
    //   //console.log(data);
    //   setError(null);
    // } catch (error) {
    //   if (error.response && error.response.data.message) setError(error.response.data.message);
    // }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log(formik.errors);

  return (
    <div className="mainSection">
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label>persian title</label>
          <input
            type="text"
            name="persianTitle"
            value={formik.values.persianTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.persianTitle && formik.touched.persianTitle && (
            <div className="error">{formik.errors.persianTitle}</div>
          )}
        </div>

        <div className="formControl">
          <label>title</label>
          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.title && formik.touched.title && <div className="error">{formik.errors.title}</div>}
        </div>

        <div className="formControl">
          <label>code</label>
          <input
            type="text"
            name="code"
            value={formik.values.code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.code && formik.touched.code && <div className="error">{formik.errors.code}</div>}
        </div>
        <div className="formControl">
          <SelectForm formik={formik} name="state" label="وضعیت" options={stateOptions} />
        </div>
        <button type="submit">Add</button>
        {error && <p style={{ color: 'red', fontSize: '13px', padding: '10px' }}>{error}</p>}
      </form>
    </div>
  );
};

export default AddNewCountry;
