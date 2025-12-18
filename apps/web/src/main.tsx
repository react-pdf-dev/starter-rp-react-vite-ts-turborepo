import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { AppPdfViewer, AppPdfViewerConfig } from "@repo/ui";

const App = () => (
	<div>
		<AppPdfViewerConfig>
			<div
				style={{
					maxWidth: "1024px",
					margin: "0 auto",
				}}>
				<h1>RP Starter Toolkit: Vite + React + Typescript in Turborepo</h1>
				<br />
				<h2>Default Toolbar</h2>
				<AppPdfViewer
					providerProps={{
						src: `https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf`,
						initialPage: 1,
					}}
					defaultLayoutProps={{ style: { width: "100%", height: "600px" } }}
				/>
				<br />
				<h2>Without Toolbar</h2>
				<AppPdfViewer
					showToolbar={false}
					providerProps={{
						src: `https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf`,
						initialPage: 1,
					}}
				/>
				<br />
				<h2>Mobile</h2>
				<AppPdfViewer
					defaultLayoutProps={{
						style: { width: "500px", margin: "0 auto" },
					}}
				/>
			</div>
		</AppPdfViewerConfig>
	</div>
);

createRoot(document.getElementById("app")!).render(<App />);
