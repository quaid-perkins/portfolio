import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

const App = () => {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					{/* fallback meta title (should be added in routes) */}
					<Title>Portfolio</Title>
					{/* mount route's child elements onto the page */}
					<Suspense>{props.children}</Suspense>
				</MetaProvider>
			)}
		>
			{/* load files as routes (located in `/src/routes/) */}
			<FileRoutes />
		</Router>
	);
};

export default App;
