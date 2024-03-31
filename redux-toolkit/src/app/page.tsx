import CreateUser from "@/components/CreateUser";
import DisplayUser from "@/components/DisplayUser";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-gray-200 h-screen w-full">
      <CreateUser/>
      <DisplayUser/>
    </div>
  );
}
