import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
    return (
        <form className="flex items-center gap-2">
            <input type="text" placeholder="Search..." 
            className="input-bordered p-1 mt-1 ml-0.5 rounded-full text-white bg-gray-800" />
            <button type="submit" className="btn-sm btn-circle
             bg-sky-500 text-white mt-1">
            <IoSearchSharp className="w-6 h-6  pl-1.5 outline-none" />
            </button>
        </form>
    )
}


export default SearchInput;


//STARTER CODE FOR THIS FILE
//import { IoSearchSharp } from "react-icons/io5";
//const SearchInput = () => {
//    return (
//        <form className="flex items-center gap-2">
//            <input type="text" placeholder="Search..." 
//            className="input-bordered p-1 mt-1 ml-0.5 rounded-full bg-gray-800" />
//            <button type="submit" className="btn-sm btn-circle
//             bg-sky-500 text-white mt-1">
//            <IoSearchSharp className="w-6 h-6  pl-1.5 outline-none" />
//            </button>
//        </form>
//    )
//}
//
//
//export default SearchInput;