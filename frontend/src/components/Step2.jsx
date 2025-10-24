import { useContext } from "react";//this hook is use to acccess the value or state of FormContext 
import { FormContext } from "../context/FormContext";

const Step2 = () => {
  const { formData, updateFormData } = useContext(FormContext);//useContext ka use karke value access kar liya

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Age</label>
        <input
          type="number"
          value={formData.age}//wiring with state means form k fields ka wiring formData state is hogya means controlled form
          onChange={e => updateFormData("age", e.target.value)}
          className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm placeholder-gray-400"
          placeholder="Enter your age"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Address</label>
        <input
          type="text"
          value={formData.address}
          onChange={e => updateFormData("address", e.target.value)}
          className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm placeholder-gray-400"
          placeholder="Enter your address"
        />
      </div>
    </div>
  );
};

export default Step2;
