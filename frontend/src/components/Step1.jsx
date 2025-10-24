import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Step1 = () => {
  const { formData, updateFormData } = useContext(FormContext);//useContext ka use karke value access kar liya

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input
          type="text"
          value={formData.name}//wiring with state means form k fields ka wiring formData state is hogya means controlled form
          onChange={e => updateFormData("name", e.target.value)}
          className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm placeholder-gray-400"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={e => updateFormData("email", e.target.value)}
          className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm placeholder-gray-400"
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
};

export default Step1;
