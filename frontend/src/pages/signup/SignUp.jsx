import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text3xl font-semibold text-center text-gray-300">
                Sign Up<span className="text-blue-500"> ChatApp</span>
            </h1>
            <form >
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-gray-300">Full Name</span>
                    </label>
                    <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10 bg-black text-gray-400" />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-gray-300">UserName</span>
                    </label>
                    <input type="text" placeholder="johndoe" className="w-full input input-bordered h-10 bg-black text-gray-400" />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-gray-300">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10 bg-black text-gray-400" />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-gray-300">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10 bg-black text-gray-400" />
                </div>
                <GenderCheckbox/>

                <a className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block text-gray-300"
                href="#">
                    Alerady have an account?
                </a>

                <div>
                    <button className="btn btn-block btn-sm mt-2 border border-slate-700 bg-black text-gray-400 ">Sign Up</button>
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
  
  


