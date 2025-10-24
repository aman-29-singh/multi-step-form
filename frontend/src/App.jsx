// import './App.css'

// function App() {
  

//   return (
//     <>
//       <h1 className='bg-amber-700'>my self aman singh</h1>
//     </>
//   )
// }

// export default App

import { FormProvider } from "./context/FormContext";
import MultiStepForm from "./pages/MultiStepForm";

function App() {
  return (
    <FormProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <MultiStepForm />
      </div>
    </FormProvider>
  );
}

export default App;
