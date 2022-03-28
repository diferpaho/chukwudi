import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

const Register = () => {

    const [Credentials, setCredentials] = useState({
        email: "",
        password: "",
      });
    
      const { push } = useRouter();
    
      const changeUser = (e: { target: { name: any; value: any; }; }) => {
        setCredentials({
          ...Credentials,
          email: e.target.value,
        });
        
      };

      const changePassword = (e: { target: { name: any; value: any; }; }) => {
        setCredentials({
          ...Credentials,
          password: e.target.value,
        });
        
      };

      const registerUser = async () => {
        try {
          await createUserWithEmailAndPassword(
            auth,
            Credentials.email,
            Credentials.password
          );
          push("/");
        } catch (error) {
          console.log(error);
        }
      };

    return (

        <div className="h-full bg-orange-50 w-full px-4 pb-60">


            <div className="flex flex-col items-center justify-center">


                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Create account</p>
                    
                   
                    <div>
                        <label id="email" className="text-sm font-medium leading-none text-gray-800">
                            Email
                        </label>
                        <input aria-labelledby="email" type="email" onChange={changeUser} className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div className="mt-6  w-full">
                        <label htmlFor="pass" className="text-sm font-medium leading-none text-gray-800">
                            Password
                        </label>

                        <input id="pass" type="password" onChange={changePassword} className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />

                    </div>
                    <div className="mt-8">
                        <button role="button" onClick={registerUser} className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Create account</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;