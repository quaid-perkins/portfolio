// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en">
				<head>
					{/* base meta data */}
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					{assets}
				</head>
				<body>
					{/* element hook for the website */}
					<div id="app" class="flex flex-col min-h-dvh font-rubik bg-zinc-50">
						{children}
					</div>
					{/* apply scripts for solidjs */}
					{scripts}
				</body>
			</html>
		)}
	/>
));
