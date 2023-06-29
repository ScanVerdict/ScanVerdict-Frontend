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
          className="peer block w-full resize-none appearance-none rounded-lg border bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-300 focus:outline-none focus:ring-blue-300"
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
          className="peer block w-full resize-none appearance-none rounded-lg border bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-300 focus:outline-none focus:ring-blue-300"
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
        className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 cursor-text bg-white px-2 text-sm text-slate-600 duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
      >
        {inputLabel}
      </label>
    </div>
  );
}
