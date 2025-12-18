# React PDF Starter Toolkit for React.js and TypeScript in Turborepo with Vite

[![Open example in codesandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/react-pdf-dev/starter-rp-react-vite-ts-turborepo/main)

Welcome to the React PDF Starter Toolkit! This repository provides a comprehensive guide on integrating React PDF with Vite, React.js, and TypeScript in Turborepo. It showcases how React PDF can be integrated and rendered as part of a monorepo project.

## Table of Contents

- [Usage](#usage)
  - [Project Setup](#project-setup)
  - [Running the Example Project](#running-the-example-project)
- [Examples](#examples)

## Usage

### Project Setup

1. **Clone the Repository**: If you haven't already, clone the repository and navigate into the project directory.

   ```bash
   git clone https://github.com/react-pdf-dev/starter-rp-react-vite-ts-turborepo.git
   cd starter-rp-react-vite-ts-turborepo
   ```

2. **Install Dependencies**: Install the necessary dependencies using npm, yarn, pnpm or bun.

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Example Project

This repository includes an example project to demonstrate React PDF in action.

1. **Start the Development Server**: Use the following command to start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm run dev
   # or
   bun run dev
   ```

2. **Open in Browser**: Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to see the example project in action

### Using the React PDF Component

Once the example project is running, you can explore the source code to see how the React PDF component is integrated. Here is a brief overview:

1.  **Import the component**: Import the desired React PDF component into your codes

```tsx
"use client";
import {
	RPProvider,
	RPDefaultLayout,
	RPPages,
	type RPLayoutProps,
	type RPProviderProps,
} from "@pdf-viewer/react";

export interface Props {
	showToolbar?: boolean;
	providerProps?: RPProviderProps;
	defaultLayoutProps?: RPLayoutProps;
}

export const AppPdfViewer = (props: Props) => {
	const { showToolbar = true, providerProps, defaultLayoutProps } = props;

	return (
		<RPProvider
			src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
			{...providerProps}>
			{showToolbar ? (
				<RPDefaultLayout {...defaultLayoutProps}>
					<RPPages />
				</RPDefaultLayout>
			) : (
				<div style={{ width: "100%", height: "550px" }}>
					<RPPages />
				</div>
			)}
		</RPProvider>
	);
};
```

2. **Import Config Component**: Import the Config component

```tsx
import { RPConfig, RPConfigProps } from "@pdf-viewer/react";
import { FC } from "react";

const AppProviders: FC<RPConfigProps> = ({ children }) => (
	<RPConfig licenseKey="your-license-key">{children}</RPConfig>
);

export default AppProviders;
```


3. **Use the AppPdfViewer component in page**: Add the React PDF component to your page

```tsx
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

```

## Examples

For more examples, please refer to the `apps/web/app/main.tsx` file in this repository:

- Default Toolbar
- Without Toolbar
- Mobile View

_Remark: If you would like more examples, feel free open an issue._

For more configurations, please check the [documentation](https://docs.react-pdf.dev) site.

---

Thank you for using React PDF! We hope this toolkit helps you build amazing Next.js applications. If you have any questions or need further assistance on this example, please feel free to open an issue. Happy coding!
