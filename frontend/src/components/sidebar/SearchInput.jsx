import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
    
    const [search, setSearch] = useState('');
    const {setSelectedConversation}= useConversation();
    const {conversations} = useGetConversations();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!search) return;
        if(search.length < 3){
            return toast.error('Search term must be at least 3 characters long');
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLocaleLowerCase()));

        if(conversation){
            setSelectedConversation(conversation);
            setSearch('');
        } else toast.error('No such user found');
    }

    return (
        <form className="flex items-center gap-2"
         onSubmit={handleSubmit}
         >
            <input type="text" placeholder="Search..." 
            className="input-bordered p-1 mt-1 ml-0.5 rounded-full text-white bg-gray-800"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
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