const ProgressBar = ({ step }) => {
  const steps = ["Personal", "Details", "Password"];
  return (
    <div className="flex justify-between mb-6">
      {steps.map((label, index) => (
        <div key={index} className="flex-1 flex flex-col items-center relative">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold text-white ${
              step > index ? "bg-indigo-600" : "bg-gray-300"
            }`}
          >
            {index + 1}
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700">{label}</span>

          {index < steps.length - 1 && (
            <div
              className={`absolute top-5 right-[-50%] w-full h-1 ${
                step > index + 1 ? "bg-indigo-600" : "bg-gray-300"
              } z-[-1]`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
