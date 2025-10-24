import { useState, useContext } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import ProgressBar from "../components/ProgressBar";
import { FormContext } from "../context/FormContext";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const { formData } = useContext(FormContext);

  const validateStep = () => {
    if (step === 1) {
      if (!formData.name.trim() || !/^[A-Za-z\s]+$/.test(formData.name)) {
        alert("Name must contain letters only");
        return false;
      }
      if (
        !formData.email.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ) {
        alert("Enter a valid email address");
        return false;
      }
    }

    if (step === 2) {
      if (!formData.age.trim() || isNaN(formData.age) || formData.age < 1 || formData.age > 120) {
        alert("Enter a valid age (1-120)");
        return false;
      }
      if (!formData.address.trim()) {
        alert("Address is required");
        return false;
      }
    }

    if (step === 3) {
      if (!formData.password || formData.password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return false;
      }
    }

    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    if (validateStep()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Registration Form
        </h2>

        <ProgressBar step={step} />

        <div className="mt-6">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
        </div>

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="px-6 py-2 bg-gray-200 rounded-lg text-gray-800 hover:bg-gray-300 transition"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={nextStep}
              className="ml-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
