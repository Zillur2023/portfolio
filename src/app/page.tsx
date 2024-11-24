import { Approach } from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <RecentProjects/>
      <Approach /> 
    </div>
  </main>
  );
}
