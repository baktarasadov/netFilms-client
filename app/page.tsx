import Login from "@/components/auth/login";
import Register from "@/components/auth/register";

export default function Home() {
  return (
    <>
      <div className="mt-[10vh]">
        <Login />
      </div>
    </>
  );
}