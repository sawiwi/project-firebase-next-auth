This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

## Description

Project on a **simple authentication application** created with **Next.js 16** and **Firebase Authentication**, developed as part of a technical evaluation.  
The web application allows you to **register new users**, **log in** and **log out**, displaying a personalized message to the user after authenticating.

---

## 🚀 Tecnologies

- [Next.js 16](https://nextjs.org/)
- [React](https://react.dev/)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Tailwind CSS](https://tailwindcss.com/) style
- [Vercel](https://vercel.com/) (deploy)

---


## Project Structure

next-firebase-auth/
├── app/
│ ├──login
│      └──page.jsx #Login/Registro page 
│ ├──home
│      └──page.jsx #home page after login
│ ├── page.jsx 
│ ├── layout.tsx # Layout of app
├── lib/
│ └── firebaseClient.js # Firebase setup and initialization
├── public/
│ └── favicon.ico
├── .env.local # Env variables of Firebase
├── package.json
└── README.md

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Env variables

apiKey: "AIzaSyB5Bv7d5q2bJjIpJeow-vyL9h4_XVBGIXE"
authDomain: "next-firebase-auth-3c12a.firebaseapp.com"
projectId: "next-firebase-auth-3c12a"
storageBucket: "next-firebase-auth-3c12a.firebasestorage.app"
messagingSenderId: "953791361377"
appId: "1:953791361377:web:6e09a6d1fbd54c4661d520"

### Clonar el repositorio
```bash
git clone https://github.com/sawiwi/project-firebase-next-auth.git
cd project-firebase-next-auth

npm install



### Challenges and Learnings

Challenges faced related to:

Firebase configuration errors (auth/configuration-not-found) error 400

Firebase specific error handling (auth/invalid-credential)

State control between registration and login.

With this, I strengthened my handling of authentication with Firebase, error handling and UX feedback in React/Next.js applications.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


### Author

Project by Fabian Astete

-Dublin, Ireland
-fabian.astete.salas@gmail.com
-GitHub https://github.com/sawiwi
-LinkedIn https://www.linkedin.com/in/fabian-astete-salas-820a45190/