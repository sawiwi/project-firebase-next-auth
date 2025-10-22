"use client"

import {useState} from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseClient";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"; 
console.log("Firebase auth object:", auth);

const LoginPage = () => {

    const router = useRouter()
    const [isRegister, setIsRegister] =useState(false);
    const [form, setForm] = useState({
        fullName: "",
        email:"",
        pass: ""
    })

    const [error, setError] = useState("")


    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})

    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try{
            if(isRegister) {
                // CREATE
                const userData = await createUserWithEmailAndPassword(
                    auth,
                    form.email,
                    form.pass
                )

                // SAVE
                await updateProfile(userData.user, {
                    displayName: form.fullName,
                })

                alert("Register user correctly ✅")
                console.log("Usuario registrado correctamente ✅")
            }else {
                await signInWithEmailAndPassword(auth, form.email, form.pass)
            }

            router.push("/home");
        }catch(error){
            setError(error.message);
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
                    name="pass"
                    placeholder="Password"
                    value={form.pass}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded"
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                    {isRegister ? "Register" : "Login"}
                </button>
                </form>

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