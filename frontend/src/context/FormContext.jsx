import { createContext, useState } from "react";//i.e contextApi ka use karenge to store state

export const FormContext = createContext();

export const FormProvider = ({ children }) => {//here children means <MultiStepForm/>
  const [formData, setFormData] = useState({//this are the value access by the children
    name: "",
    email: "",
    age: "",
    address: "",
    password: "",
    confirmPassword: "",
    // add other fields as needed
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value })); //here using shallow copy kiye bas fields k value update kar diye
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>{/**this provider will provide this value to its children i.e MultiStepForm ko */}
      {children}
    </FormContext.Provider>
  );
};
