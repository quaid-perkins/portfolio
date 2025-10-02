import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Header from "~/components/header";
import Footer from "~/components/footer";
import "./app.css";

const App = () => {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					{/* fallback meta title, an override should be added in route files */}
					<Title>Portfolio</Title>
					{/* header displayed on every page */}
					<Header />
					{/* mount route's child elements onto the page */}
					<Suspense>{props.children}</Suspense>
					{/* footer displayed on every page */}
					<Footer />
				</MetaProvider>
			)}
		>
			{/* load files as routes (located in `/src/routes/) */}
			<FileRoutes />
		</Router>
	);
};

export default App;
