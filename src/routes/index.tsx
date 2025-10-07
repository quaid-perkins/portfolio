import { Title } from "@solidjs/meta";
import { Download, Github, Linkedin, MapPin } from "lucide-solid";
import { Button } from "~/components/ui/button";

// 'home / index' page
const Home = () => {
  return (
    <>
      <Title>Home</Title>
      <main class="mx-auto my-8 sm:w-[80vw] w-full flex flex-col gap-16 sm:justify-between max-sm:px-2">
        <div class="flex flex-col">
					<span class="inline-flex items-center gap-1 pl-1">
						<MapPin size={20} />
						{" Wales, UK"}
					</span>
					<div class="font-bold text-8xl my-2">
						Quaid
						<span class="text-purple-900">{" Perkins"}</span>
					</div>
					<span class="pl-1 text-xl">
						Computer Engineering and I.T. Student
					</span>
				</div>
				<div class="flex flex-col gap-4 items-end">
          <span class="w-[90%] sm:w-[65%] text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, in natus explicabo nobis cumque voluptatem ullam esse nihil sequi reprehenderit aliquid laborum fuga molestias inventore totam. Voluptatum aperiam provident odit!</span>
          <div class="flex gap-2 justify-end">
            <Button
              as="a"
              href="https://github.com/quaid-perkins"
              target="_blank"
              variant="ghost"
              size="slim"
            >
              <Github size={20} />
            </Button>
            <Button
              as="a"
              href="https://linkedin.com"
              target="_blank"
              variant="ghost"
              size="slim"
            >
              <Linkedin size={20} />
            </Button>
            <Button
              title="Download CV"
            >
              <Download size={20} />Download CV
            </Button>
          </div>
				</div>
      </main>
    </>
  );
};

export default Home;
