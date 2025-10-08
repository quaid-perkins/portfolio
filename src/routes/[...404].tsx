import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { HttpStatusCode } from "@solidjs/start";
import { ArrowLeftToLine, TriangleAlert } from "lucide-solid";
import { Button } from "~/components/ui/button";

// not found 404 error page
const NotFound = () => {
  return (
    <>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <main class="mx-auto my-8 flex w-full max-w-6xl flex-col gap-8 max-sm:px-1 sm:w-[50%] sm:justify-between">
        <div class="flex flex-col">
          <div class="my-2 text-7xl font-bold sm:text-8xl">
            {"Error: "}
            <span class="text-purple-900">404</span>
          </div>
          <span class="pl-1 text-xl sm:text-2xl">
            This page doesn't seem to exist. D:
          </span>
        </div>
        <div class="flex justify-end gap-2 px-1">
          <Button
            as="a"
            href="https://github.com/quaid-perkins/portfolio/issues"
            target="_blank"
            title="report"
            variant="ghost"
            class="hover:bg-red-900 hover:text-zinc-50"
          >
            <TriangleAlert size={20} />
            Report
          </Button>
          <Button as={A} href="/" title="home">
            <ArrowLeftToLine size={20} />
            Return Home
          </Button>
        </div>
      </main>
    </>
  );
};

export default NotFound;
