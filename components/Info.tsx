import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FiInfo } from "react-icons/fi";
import styled, { css } from "styled-components";

const ModalContainer = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
`;

export default function Info(){
  const [open, setOpen] = useState(false);

  var classNameCondition = ""
  if (open) {
    classNameCondition="fixed z-90 top-8 right-8 bg-sky-300 w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-sky-900 text-2xl hover:bg-sky-500 hover:drop-shadow-2xl"
  } else {
    classNameCondition="fixed z-90 top-8 right-8 bg-slate-100 w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-sky-900 text-2xl hover:bg-sky-500 hover:drop-shadow-2xl"
  }

  return (
    <>
      <button
        title="Info"
        className= {classNameCondition}
        onClick={() => setOpen(true)}
      >
        <FiInfo />
      </button>

      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <ModalContainer>
                <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-3xl font-medium leading-6 text-gray-900 pb-2"
                  >
                    Welcome to Riffusion
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Riffusion is a fine-tuned Stable Diffusion model that
                      generates spectrogram images from any text prompt. <br></br>
                      <br></br>
                      These images are then converted into music. <br></br>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-sky-300 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      Let&apos;s Riff 🎸
                    </button>
                  </div>
                </div>
              </ModalContainer>
            </Transition.Child>
          </div>
      </Dialog>
    </Transition>
    </>
  );
};