import React, {
  Dispatch,
  FC,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { useApiPost } from "../functions/FetchApi";
interface IProps {
  setShowRegisterModal: Dispatch<SetStateAction<boolean>>;
}

const RegisterModalComponent: FC<IProps> = ({ setShowRegisterModal }) => {
  const [fullname, setFullname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { postAPIData, data } = useApiPost();
  const resetForm = (): void => {
    setFullname("");
    setUsername("");
    setPassword("");
  };

  const registerHandler = () => {
    // console.log(fullname, username, password);
    postAPIData("/auth/register", { username, password, fullname });

    // console.log(status);
    // console.log(data);
    // console.log(error);
    // setShowRegisterModal(false);
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      alert("your register successfully");
      resetForm();
    }
  }, [data]);

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setShowRegisterModal(false)}
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
                            onChange={(e) => setFullname(e.target.value)}
                            value={fullname}
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
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
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
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-white bg-green-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={() => registerHandler()}
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
