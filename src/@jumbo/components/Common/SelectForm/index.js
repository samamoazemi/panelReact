import Select from 'react-select';
import React from 'react';

const SelectForm = ({ label, name, formik, options }) => {
  return (
    <div className="flex flex-col h-24 w-full">
      <Select
        value={formik.values[name]}
        onChange={value => {
          formik.setFieldValue(name, value);
        }}
        options={options}
        placeholder={<div>{label}</div>}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-xs text-orangeKite mt-2">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default SelectForm;
