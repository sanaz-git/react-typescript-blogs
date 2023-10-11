import React, { Dispatch, FC, SetStateAction } from "react";
interface IProps {
  setShowRegisterModal: Dispatch<SetStateAction<boolean>>;
}

const RegisterModalComponent: FC<IProps> = ({ setShowRegisterModal }) => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setShowRegisterModal}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="mt-3 sm:flex">
            <div className="mt-2 text-center sm:ml-4 sm:text-left">
              <h4 className="text-lg font-medium text-gray-800">
                Create New account
              </h4>
              <div>
                <div className=" items-center pt-6 sm:pt-0">
                  <div className="p-3 mt-6 overflow-hidden bg-white shadow-md sm:rounded-lg">
                    <form>
                      <div className="mt-4">
                        <div className="flex flex-col items-start">
                          <input
                            type="text"
                            name="fullname"
                            placeholder="full name"
                            // onChange={(e) => setUsername(e.target.value)}
                            // value={username}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex flex-col items-start">
                          <input
                            type="text"
                            name="username"
                            placeholder="username"
                            // onChange={(e) => setPassword(e.target.value)}
                            // value={password}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex flex-col items-start">
                          <input
                            type="password"
                            name="password"
                            placeholder="password"
                            // onChange={(e) => setPassword(e.target.value)}
                            // value={password}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-white bg-green-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        // onClick={LoginHandler}
                      >
                        Register
                      </button>
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() => setShowRegisterModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModalComponent;