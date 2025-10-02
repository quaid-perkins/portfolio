import type { Accessor } from "solid-js";
import { createSignal } from "solid-js";

// boolean toggle wrapper for `createSignal`
const createToggle = (
	initial: boolean = false
): [Accessor<boolean>, () => void] => {
	const [value, setValue] = createSignal<boolean>(initial);

	const toggle = () => {
		setValue((prev) => !prev);
	};

	return [value, toggle];
};

export default createToggle;
