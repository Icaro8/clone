import React from "react";
import { useSession, signIn } from "next-auth/react";

export function Login() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <button onClick={() => signIn("google")}>
        Login for more informations
      </button>
    </div>
  );
}
