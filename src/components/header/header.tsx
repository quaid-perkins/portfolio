import { Component, For, Match, Switch } from "solid-js";
import { Button } from "~/components/ui/button";
import { A } from "@solidjs/router";
import useSizeBreakpoints from "~/hooks/useSizeBreakpoints";
import menuItems from "./menu-items";

const Header: Component = () => {
	const breakpoints = useSizeBreakpoints();

	return (
		<header class="inline-flex justify-center sticky top-0 w-full py-4 bg-white/80 border-b border-zinc-200/80 backdrop-blur-sm">
			<nav class="inline-flex justify-between items-center w-full max-w-[84rem] px-4 sm:px-8">
				<Button as={A} href="/" variant="link" size="slim">
					{"<Quaid />"}
				</Button>

				{/* menu items */}
				<Switch>
					{/* desktop menu */}
					<Match when={breakpoints.sm}>
						<div class="inline-flex gap-4">
							<div class="inline-flex gap-2">
								<For each={menuItems}>
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
											</Switch>
										);
									}}
								</For>
							</div>
						</div>
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
