"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import googleImage from "../../../public/image/2993685_brand_brands_google_logo_logos_icon.png";
import githubImage from "../../../public/image/211904_social_github_icon.png";
import Image from "next/image";
import tick from "../../../public/image/299110_check_sign_icon.png"

export default function SignIn() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("Session Data:", session);
  }, [session]);

  
  if (session) {
    return (
      <>
    {session ? (
      <div className="text-center my-6">
        <Image
          src={
            session.user?.image
              ? session.user.image
              : `https://ui-avatars.com/api/?name=${encodeURIComponent(session.user?.name || "User")}&background=random`
          }
          alt="User Image"
          className="w-16 h-16 rounded-full mx-auto mb-5 "
        ></Image>
        <p className="font-bold text-[20px] ">{session.user?.email}</p>
        <div className="flex justify-center">You successfully logged in Nike website <Image src={tick} alt="tick" width={25}></Image></div>
        <button onClick={() => signOut()} className="mt-8 px-4 py-2 bg-red-500 text-white rounded w-[270px]">
          Sign out
        </button>
      </div>
    ) : (
      <p>Not signed in</p>
    )}
  </>

    );
  }
  return (
    <>
      <button
        className="py-4 text-center cursor-pointer rounded w-[325px] border border-gray-400 my-2 flex justify-center"
        onClick={() => signIn("google") }
      >
        <Image src={googleImage} alt="google" className="w-6 mr-2"></Image>
        Sign in with Google
      </button>
      <button
        className="py-4 text-center cursor-pointer rounded bg-slate-800 w-[325px] text-white my-1 flex justify-center"
        onClick={() => signIn("github")}
      >
        <Image src={githubImage} alt="google" className="w-7 mr-2"></Image>
        Sign in with Github
      </button>
    </>
  );
}
