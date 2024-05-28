import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const useGetConversations = () =>{
    const [loading, setLodaing] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() =>{
        const getConversations = async () =>{
            setLodaing(true);
            try {
                const res = await fetch('/api/users');
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }

                setConversations(data);
                

            } catch (error) {
                toast.error(error.message);
            } finally{
                setLodaing(false);
            }
        }

        getConversations();
    }, [])


    return {loading, conversations};
}

export default useGetConversations;