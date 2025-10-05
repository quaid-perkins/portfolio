import { Component, For, Match, Switch } from "solid-js";
import { Button } from "~/components/ui/button";
import { A } from "@solidjs/router";
import useSizeBreakpoints from "~/hooks/useSizeBreakpoints";
import menuItems from "./menu-items";
import NavigationMenuDesktop from "../navigation-menu-desktop";

const Header: Component = () => {
  const breakpoints = useSizeBreakpoints();

  return (
    <header class="sticky top-0 inline-flex w-full justify-center border-b border-zinc-200/80 bg-white/80 py-4 backdrop-blur-sm">
      <nav class="inline-flex w-full max-w-[84rem] items-center justify-between px-4 sm:px-8">
        {/* nav title */}
        <Button as={A} href="/" variant="link" size="slim">
          {"<Quaid />"}
        </Button>

        {/* menu items */}
        <Switch>
          {/* desktop menu */}
          <Match when={breakpoints.sm}>
            <NavigationMenuDesktop items={menuItems} />
          </Match>
          {/* mobile menu */}
          <Match when={!breakpoints.sm}>
            <></>
          </Match>
        </Switch>
      </nav>
    </header>
  );
};

export default Header;
