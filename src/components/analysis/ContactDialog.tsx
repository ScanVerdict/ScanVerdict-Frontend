import InputForm from "../home/InputForm";
import { useRef, useState } from "react";

/* eslint @typescript-eslint/no-var-requires: "off" */
export default function ContactDialog() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // transition opacity-0 to opacity-100
  const openDialog = () => {
    setIsDialogOpen(true);
    dialogRef?.current?.showModal();
  };

  // close dialog when clicking outside of dialog
  window.onclick = (event) => {
    if (event.target === dialogRef.current) {
      setIsDialogOpen(false);
      dialogRef?.current?.close();
    }
  };

  return (
    <>
      <button
        // className="mx-auto inline-flex items-center rounded bg-blue-100 p-2 font-bold text-[#1F2933] transition hover:bg-blue-200 text-center"
        // center button
        className="mx-auto inline-flex items-center rounded bg-blue-100 p-2 font-bold text-[#1F2933] transition hover:bg-blue-200 text-center"
        onClick={openDialog}
      >
        Contact us
      </button>
      <dialog
        ref={dialogRef}
        className={`transition-opacity duration-300 ${
          isDialogOpen ? "opacity-100" : "opacity-0"
        }`}
        onClose={() => {
          setIsDialogOpen(false);
          dialogRef?.current?.close();
        }}
      >
        <form className="text-center" method="dialog">
          <h3 className="text-xs text-[#1F2933]">Contact Us</h3>

          <h1 className="text-2xl text-[#1F2933]">Get in touch</h1>
          <br />

          <h2 className="text-sm text-[#1F2933]">
            We'd love to hear from you. Please fill out this form
          </h2>
          <br />
          <div className="flex flex-col gap-7">
            <div className="flex w-full flex-col gap-7 md:flex-row">
              <InputForm
                inputInfo={firstName}
                setInputInfo={setFirstName}
                inputLabel="First name"
                autoComplete="given-name"
              />
              <InputForm
                inputInfo={lastName}
                setInputInfo={setLastName}
                inputLabel="Last name"
                autoComplete="family-name"
              />
            </div>

            <InputForm
              inputInfo={email}
              setInputInfo={setEmail}
              inputLabel="Email"
              autoComplete="email"
            />
            <InputForm
              inputInfo={phoneNumber}
              setInputInfo={setPhoneNumber}
              inputLabel="Phone number"
              autoComplete="tel"
            />
            <InputForm
              inputInfo={message}
              setInputInfo={setMessage}
              inputLabel="Message"
              autoComplete="off"
            />

            <div className="flex-col gap-7">
              <a
                className="inline-flex items-center rounded bg-blue-100 p-2 font-bold text-[#1F2933] transition hover:bg-blue-200"
                href={`mailto:scanverdict@gmail.com?subject=Contact%20Us&body=Hi%20ScanVerdict%20Team,%0DI%20Want%20More%20Information%20about%20my%20company:%0D%0D${message}%0D%0D${firstName}%20${lastName}%0D${phoneNumber}%0D${email}`}
              >
                <svg
                  fill="#000000"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Capa_1"
                  viewBox="-40 -90 693.00 693.00"
                  stroke="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="XMLID_51_">
                      <path
                        id="XMLID_53_"
                        d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616 l-67.6-32.22V456.687z"
                      ></path>
                      <path
                        id="XMLID_52_"
                        d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422 c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414 l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956 L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span>Send</span>
              </a>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
}
