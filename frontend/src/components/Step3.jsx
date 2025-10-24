import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Step3 = () => {
  const { formData, updateFormData } = useContext(FormContext);//useContext ka use karke value access kar liya

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Password</label>
        <input
          type="password"
          value={formData.password || ""}//wiring with state means form k fields ka wiring formData state is hogya means controlled form
          onChange={e => updateFormData("password", e.target.value)}
          className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm placeholder-gray-400"
          placeholder="Enter your password"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
        <input
          type="password"
          value={formData.confirmPassword || ""}
          onChange={e => updateFormData("confirmPassword", e.target.value)}
          className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm placeholder-gray-400"
          placeholder="Confirm your password"
        />
      </div>

      <div className="mt-4 p-4 border-l-4 border-indigo-400 bg-indigo-50 rounded-xl">
        <h3 className="font-bold mb-2 text-gray-800">Summary:</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Address:</strong> {formData.address}</p>
      </div>
    </div>
  );
};

export default Step3;
