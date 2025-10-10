import { Title } from "@solidjs/meta";
import { Download, Github, Linkedin, MapPin } from "lucide-solid";
import { Button } from "~/components/ui/button";

// 'home / index' page
const Home = () => {
  return (
    <>
      <Title>Home</Title>
      <main class="mx-auto my-8 flex w-full max-w-6xl flex-col gap-8 max-sm:px-1 sm:w-1/2">
        <div class="flex flex-col">
          <span class="inline-flex items-center gap-1 pl-1">
            <MapPin size={20} />
            <span>Wales, UK</span>
          </span>
          <div class="text-[14vw] font-bold sm:my-2 sm:text-8xl">
            Quaid
            <span class="text-purple-900">{" Perkins"}</span>
          </div>
          <span class="pl-1 text-xl sm:text-2xl">
            Computer Engineering & I.T. Student
          </span>
        </div>
        <div class="flex flex-col gap-4 px-1">
          <p class="text-justify">
            Hello 👋 I'm Quaid, a Computer Engineering & I.T. student.
            Currently, I am focussing on my skills in Website Devlopment with
            SolidJS and SolidStart to design and create properly reactivity and
            performat web-application.
          </p>
          <div class="flex justify-end gap-2">
            <Button
              as="a"
              href="https://github.com/quaid-perkins"
              target="_blank"
              variant="ghost"
              size="slim"
              class="hover:bg-zinc-200"
            >
              <Github size={20} />
            </Button>
            <Button
              as="a"
              href="https://linkedin.com"
              target="_blank"
              variant="ghost"
              size="slim"
              class="hover:bg-zinc-200"
            >
              <Linkedin size={20} />
            </Button>
            <Button title="Download CV">
              <Download size={20} />
              Download CV
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
