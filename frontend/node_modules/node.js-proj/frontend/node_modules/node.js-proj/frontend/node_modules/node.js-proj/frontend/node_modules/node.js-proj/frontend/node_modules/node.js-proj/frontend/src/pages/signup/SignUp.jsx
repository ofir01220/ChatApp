import GenderCheckbox from "./GenderCheckbox";
import {Link} from 'react-router-dom';
import { useState } from "react";
import useSignUp from "../../hooks/useSignup";

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: '',
    })

    const {loading, signup} = useSignUp();
    const handleChecboxChange = (gender) =>{
        setInputs({...inputs, gender: gender});
    }

    const handleSubmit =  async (e) =>{
        e.preventDefault();

        await signup(inputs);
    }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text3xl font-semibold text-center text-gray-300">
                Sign Up<span className="text-blue-500"> ChatApp</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-gray-300">Full Name</span>
                    </label>
                    <input type="text" placeholder="John Doe" onChange={(e) => setInputs({...inputs, fullName: e.target.value})} value={inputs.fullName} className="w-full input input-bordered h-10 bg-black text-gray-400" />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-gray-300">userName</span>
                    </label>
                    <input type="text" placeholder="johndoe" className="w-full input input-bordered h-10 bg-black text-gray-400"
                    value={inputs.userName}
                    onChange={(e) => setInputs({...inputs,userName: e.target.value})}
                    />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-gray-300">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10 bg-black text-gray-400"
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs,password: e.target.value})}
                    />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-gray-300">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10 bg-black text-gray-400" 
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs,confirmPassword: e.target.value})}
                    />
                </div>
                <GenderCheckbox onCheckboxChange= {handleChecboxChange} selectedGender={inputs.gender}/>

                <Link className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block text-gray-300"
                to="/login">
                    Alerady have an account?
                </Link>

                <div>
                    <button className="btn btn-block btn-sm mt-2 border border-slate-700 bg-black text-gray-400 "
                    disabled={loading}
                    >
                        {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default SignUp;


//STARTER CODE FOR THIS FILE
// import GenderCheckbox from "./GenderCheckbox";
// 
// 
// 
// const SignUp = () => {
//     return (
//     
//     <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//                 Sign Up<span className="text-blue-500"> ChatApp</span>
//             <h1 className="text3xl font-semibold text-center text-gray-300">
//             <form >
//             </h1>
//                     <label className="label p-2">
//                 <div>
//                     </label>
//                         <span className="text-base label-text text-gray-300">Full Name</span>
//                 </div>
//                     <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10 bg-black text-gray-400" />
//                     <label className="label p-2">
//                 <div>
//                     </label>
//                         <span className="text-base label-text text-gray-300">UserName</span>
//                 </div>
//                     <input type="text" placeholder="johndoe" className="w-full input input-bordered h-10 bg-black text-gray-400" />
//                     <label className="label p-2">
//                 <div>
//                     </label>
//                         <span className="text-base label-text text-gray-300">Password</span>
//                 </div>
//                     <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10 bg-black text-gray-400" />
//                     <label className="label p-2">
//                 <div>
//                     </label>
//                         <span className="text-base label-text text-gray-300">Confirm Password</span>
//                 </div>
//                     <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10 bg-black text-gray-400" />
// 
// 
// 
//                 <GenderCheckbox/>                <a className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block text-gray-300"                    Alerady have an account?
//                     href="#">
// 
// </a>                <div>
//                     <button className="btn btn-block btn-sm mt-2 border border-slate-700 bg-black text-gray-400 ">Sign Up</button>
// 
//             </form>
//                 </div>
// 
//         </div>    </div>
//   )
// 
//   
//export default SignUp;
  
  


