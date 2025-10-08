import { Title } from "@solidjs/meta";
import { Download, Github, Linkedin, MapPin } from "lucide-solid";
import { Button } from "~/components/ui/button";

// 'home / index' page
const Home = () => {
  return (
    <>
      <Title>Home</Title>
      <main class="mx-auto my-8 flex w-full flex-col gap-8 max-sm:px-1 sm:w-[50%] sm:justify-between">
        <div class="flex flex-col">
          <span class="inline-flex items-center gap-1 pl-1">
            <MapPin size={20} />
            <span>Wales, UK</span>
          </span>
          <div class="my-2 text-7xl font-bold sm:text-8xl">
            Quaid
            <span class="text-purple-900">{" Perkins"}</span>
          </div>
          <span class="pl-1 text-xl sm:text-2xl">
            Computer Engineering & I.T. Student
          </span>
        </div>
        <div class="flex flex-col items-end gap-4 px-1">
          <span class="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            in natus explicabo nobis cumque voluptatem ullam esse nihil sequi
            reprehenderit aliquid laborum fuga molestias inventore totam.
            Voluptatum aperiam provident odit!
          </span>
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
