import { Outlet, Navigate } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/409760924_1128447741850693_4498296902829678891_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=g6kjPEHMUF8AX-vkac1&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfAhYe56aiBrzF3sVQ-j4O4WVZ_if000k49NZiHimLR4WA&oe=658BE23C"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
}
