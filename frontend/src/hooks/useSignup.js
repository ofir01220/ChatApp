import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext';


const useSignup = () =>{
    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    const signup = async ({fullName, userName,password, confirmPassword,gender}) =>{
        const success = handleInputErrors({fullName, userName,password, confirmPassword,gender});
        
        setLoading(true);

        if(!success) return;
    

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullName, userName,password, confirmPassword,gender})
            });
            console.log('inside fetch request');
            const data = await res.json();
            if(data.error){
              throw new Error(data.error);
            }
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    }

    return {loading, signup};
};


export default useSignup;


function handleInputErrors({fullName, userName,password, confirmPassword,gender}){
    if(!fullName || !userName || !password || !confirmPassword || !gender){
        toast.error('Please fill all the filed');
        return false;
    }

    if(password != confirmPassword){
        toast.error('Passwords do not match');
        return false;
    }

    if(password.length < 3){
        toast.error('Password must be at least 3 characters');
        return false;
    }
    //if(!validatePassword(password)){
      //  return false;
    //}

    return true;
}


/*function validatePassword(password){
    
      let hasUpperCase = false;
      let hasSpecialChar = false;
      let hasNumber = false;
    
      for (const char of password) {
        if (char >= 'A' && char <= 'Z') {
          hasUpperCase = true;
        } else if ('!@#$%^&*()_-+=<>?/.[]{}|'.includes(char)) {
          hasSpecialChar = true;
        } else if (char >= '0' && char <= '9') {
          hasNumber = true;
        }
      }
    
      if(!hasUpperCase){
        toast.error('Please use upercase in the password');
      }
      if(!hasSpecialChar){
        toast.error('Please use special char in password : !@#$%^&*()_-+=<>?/.[]{}|')
      }
      if(!hasNumber){
        toast.error('Please add at least 1 number to your password');
      }
      return hasUpperCase && hasSpecialChar && hasNumber;
}*/