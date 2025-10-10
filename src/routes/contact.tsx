import { Title } from "@solidjs/meta";
import { Github, Linkedin, Send } from "lucide-solid";
import { Component } from "solid-js";
import { DOMElement } from "solid-js/jsx-runtime";
import { Button } from "~/components/ui/button";
import {
  TextField,
  TextFieldInput,
  TextFieldTextArea,
} from "~/components/ui/text-field";

type formEvent = SubmitEvent & {
  currentTarget: HTMLFormElement;
  target: DOMElement;
};

const Contact: Component = () => {
  const handleSubmit = (e: formEvent) => {
    e.preventDefault();

    if (e.target) {
      e.currentTarget.reset();
    }
  };

  return (
    <>
      <Title>Contact Me</Title>
      <main class="mx-auto my-8 flex w-full gap-8 max-lg:flex-col max-sm:px-1 sm:w-2/3">
        <div class="flex flex-1 flex-col">
          <div class="text-[14vw] font-bold sm:my-2 sm:text-7xl">
            <span class="text-purple-900">Contact</span>
            {" Me"}
          </div>
          <p>Send me an Email :D.</p>
          <span class="flex gap-2">
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
          </span>
        </div>
        <form
          class="flex flex-1 flex-col gap-2 max-sm:px-3"
          on:submit={handleSubmit}
        >
          <div class="flex gap-2 max-sm:flex-col">
            <TextField>
              <TextFieldInput type="text" placeholder="Name" />
            </TextField>
            <TextField>
              <TextFieldInput type="email" placeholder="Email" />
            </TextField>
          </div>
          <TextField>
            <TextFieldInput type="text" placeholder="Subject" />
          </TextField>
          <TextField>
            <TextFieldTextArea placeholder="Your message..." />
          </TextField>
          <div class="flex justify-end">
            <Button type="submit">
              Send
              <Send size={16} />
            </Button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Contact;
