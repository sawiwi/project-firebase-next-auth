"use client"

import {useState} from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseClient";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"; 

const LoginPage = () => {

    const router = useRouter()
    const [isRegister, setIsRegister] =useState(false);
    const [form, setForm] = useState({
        fullName: "",
        email:"",
        password: ""
    })
    const [loading, isLoading] = useState(false);
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")


    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
        setError("")
        setSuccess("")
    };


    // validates
    const validateForm = ()=> {
        if (isRegister && form.fullName.trim() === ""){
            setError("Full name it is required")
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
        setError("Enter a valid email");
        return false;
        }

        if (form.password.length <= 6 ){
            setError("Password should be 6 characters at less")
            return false;
        }

        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!validateForm()) return;
        isLoading(true)

        try{
            if(isRegister) {
                // CREATE
                const userData = await createUserWithEmailAndPassword(
                    auth,
                    form.email,
                    form.password
                )

                // SAVE
                await updateProfile(userData.user, {
                    displayName: form.fullName,
                })

                setSuccess("Register user correctly ✅")
            }else {
                
                await signInWithEmailAndPassword(auth, form.email, form.password)
                setSuccess("Login successful")
            }
            setTimeout(() => {
                router.push("/home");

            }, 1000)
        }catch(error){

            switch (error.code) {
                case "auth/user-not-found":
                setError("The user has not register. Please create a new user");
                break;
                case "auth/wrong-password":
                    setError("Invalid password. Try again.");
                    break;
                case "auth/email-already-in-use":
                    setError("This email has already register. Sign In.");
                    break;
                case "auth/invalid-email":
                    setError("Email format it is not valid");
                    break;
                case "auth/weak-password":
                    setError("Password should have 6 character at less");
                    break;
                case "auth/invalid-credential":
                    setError("The user is not register or password is invalid");
                    break;
                default:
                    setError("Something are wrong. Try again later please.");
            }
            
        }   finally {
            isLoading(false)
        }
    }

    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-sm bg-gray-700 shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4 text-center">
                {isRegister ? "New account" : "Sign In"}
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {isRegister && (
                    <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded"
                    />
                )}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded"
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className={`bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    {/* {isRegister ? "Register" : "Login"} */}
                    {loading
                    ? "Cargando..."
                    : isRegister
                    ? "Registrarse"
                    : "Iniciar Sesión"}
                </button>
                </form>

                {/* {error && (
                    <div className="my-2 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                        {error}
                    </div>
                    )} */}

                {success && (
                    <div className="my-2 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
                        {success}
                    </div>
                    )}

                <p className="text-sm mt-4 text-center">
                    {isRegister ? "¿Do you have account?" : "I dont have account"}{" "}
                    <button
                        onClick={() => setIsRegister(!isRegister)}
                        className="text-blue-300 font-semibold"
                    >
                        {isRegister ? "Sign In" : "Register here!"}
                    </button>
                </p>
            </div>
        </div>
        </>
    )
}

export default LoginPage;