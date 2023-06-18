type InputFormProps = {
  inputInfo: string;
  setInputInfo: (value: string) => void;
  inputLabel: string;
};

export default function InputForm({
  inputInfo,
  setInputInfo,
  inputLabel,
}: InputFormProps) {
  let inputType = "text";

  if (inputLabel === "Email") {
    inputType = "email";
  } else if (inputLabel === "Phone Number") {
    inputType = "tel";
  }

  return (
    <div className="relative">
      {inputLabel === "Message" ? (
        <textarea
          id={inputLabel}
          className="resize-none block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 appearance-none focus:outline-none focus:border-blue-300 focus:ring-blue-300 peer"
          placeholder=" "
          value={inputInfo}
          rows={5}
          onChange={(e) => {
            setInputInfo(e.target.value);
          }}
        />
      ) : (
        <input
          autoComplete="given-name"
          type={inputType}
          id={inputLabel}
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 appearance-none focus:outline-none focus:border-blue-300 focus:ring-blue-300 peer"
          placeholder=" "
          value={inputInfo}
          onChange={(e) => {
            setInputInfo(e.target.value);
          }}
        />
      )}
      <label
        htmlFor={inputLabel}
        // peer-placeholder-6 since its the same as 1/2 for the other inputs and it needs to be fixed for Message
        className="absolute text-sm text-slate-600 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-placeholder-shown:top-6 peer-focus:-translate-y-4 left-1 cursor-text"
      >
        {inputLabel}
      </label>
    </div>
  );
}
