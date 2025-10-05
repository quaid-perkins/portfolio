import { Component, For, Match, Switch } from "solid-js";
import { Button } from "./ui/button";
import { A } from "@solidjs/router";
import { Moon } from "lucide-solid";

export type Props = {
  items: MenuItem[];
};

const NavigationMenuDesktop: Component<Props> = (props) => {
  return (
    <div class="inline-flex gap-4">
      <div class="inline-flex">
        <For each={props.items}>
          {(item) => {
            return (
              <Switch>
                {/* menu link */}
                <Match when={!item.subMenuItems}>
                  <Button as={A} href={item.href} variant="ghost">
                    {item.label}
                  </Button>
                </Match>
                {/* TODO: menu dropdown */}
                <Match when={item.subMenuItems}>
                  <></>
                </Match>
              </Switch>
            );
          }}
        </For>
      </div>
      <Button variant="ghost" size="slim">
        <Moon size={20} />
      </Button>
    </div>
  );
};

export default NavigationMenuDesktop;
