import { Component, For, Match, Switch } from "solid-js";
import { Button } from "./ui/button";
import { A } from "@solidjs/router";
import { Menu, Moon, X } from "lucide-solid";
import createToggle from "~/hooks/createToggle";

export type Props = {
  items: MenuItem[];
};

const NavigationMenuMobile: Component<Props> = (props) => {
	const [isMenuOpen, toggleMenu] = createToggle(false);

  return (
    <>
      <Button variant="ghost" size="slim" on:click={toggleMenu}>
        <Menu size={20} />
      </Button>
      <div
        class="flex flex-col absolute w-full h-[100dvh] overflow-y-auto top-0 right-0 bg-zinc-50 transition-transform duration-250 z-10"
        classList={{
          "-translate-x-full": !isMenuOpen()
        }}
      >
        <div class="inline-flex w-full justify-between border-b border-zinc-200/80 bg-white/80 p-4">
          <Button variant="ghost" size="slim">
            <Moon size={20} />
          </Button>
          <Button variant="ghost" size="slim" on:click={toggleMenu}>
            <X size={20} />
          </Button>
        </div>
        <div class="inline-flex flex-col items-end p-4 gap-4">
          {/* menu items for loop */}
          <For each={props.items}>
            {(item) => (
              <Button as={A} href={item.href} variant="ghost" on:click={toggleMenu}>
                {item.label}
              </Button>
            )}
          </For>
        </div>
      </div>
    </>
  );
};

export default NavigationMenuMobile;
