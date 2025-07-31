import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    cancelBookingFn: () => void; 
};

export const CancelConfirmModal: React.FC<ModalProps> = ({
    isOpen,
    setIsOpen,
    cancelBookingFn,
}) => {
    
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed backdrop-blur-xs inset-0 z-10 flex items-center justify-center overflow-y-hidden">
                    <div className="flex flex-col py-8 px-4 text-center">
                        <div
                            className="fixed inset-0 transition-opacity pointer-events-none"
                            aria-hidden="true"
                        >
                            <div className="absolute inset-0  "></div>
                        </div>

                        <motion.div
                            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
                            initial={{
                                opacity: 0,
                                scale: 0.75,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    ease: "easeOut",
                                    duration: 0.15,
                                },
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.75,
                                transition: {
                                    ease: "easeIn",
                                    duration: 0.15,
                                },
                            }}
                        >
                            <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                            >
                                &#8203;
                            </span>

                            {/* main modal component  */}
                            <div
                                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-2xl border border-gray-200 transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                role="div"
                                aria-modal="true"
                                aria-labelledby="modal-headline"
                            >
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <svg
                                                className="h-6 w-6 text-red-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h1
                                                className="text-lg leading-6 font-medium text-gray-900"
                                                id="modal-headline"
                                            >
                                                Cancel Booking
                                            </h1>
                                            <div className="mt-2">
                                                <p className="text-xs text-gray-500">
                                                    Are you sure you want to cancel your booking? You only
                                                    get 50% of amount as the refund. Click confirm to
                                                    cancel the booking.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full cursor-pointer inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => cancelBookingFn()}
                                    >
                                        Confirm
                                    </button>

                                    <button
                                        type="button"
                                        className="mt-3 w-full cursor-pointer inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};
