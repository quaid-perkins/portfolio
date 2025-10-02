// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

// mount elements onto app hook
mount(() => <StartClient />, document.getElementById("app")!);
