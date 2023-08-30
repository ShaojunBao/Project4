import SignUpForm from "../../components/NavBar/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";
import React, {useState} from 'react';

export default function AuthPage( {setUser} ) {

  const [signUp, setSignUp] = useState(true);
  const toggleForm = () => {
    setSignUp(!signUp);
  }
  return (
    <main>
    <h1>AuthPage</h1>
    {signUp ? <LogInForm setUser={setUser} />:
    <SignUpForm setUser={setUser} /> 
      
    }

    <button onClick={toggleForm}>
      {signUp ? 'SignUp':'LogIn'}
    </button>

    </main>
  );
}