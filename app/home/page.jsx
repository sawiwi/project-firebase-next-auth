"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebaseClient";
import { onAuthStateChanged, signOut } from "firebase/auth";

const HomePage = () => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/login")
      } else {
        setUser(currentUser)
      }
    });

    return () => unSubscribe()
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth)
    router.push("/login")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      {user ? (
        <>
          <h1 className="text-3xl font-bold">
            Hey, {user.displayName || "User"} 
          </h1>
          <p className="mt-2 text-gray-400">You have successfully logged in</p>
          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Log out
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default HomePage