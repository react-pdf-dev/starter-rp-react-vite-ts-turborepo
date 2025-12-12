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

2. **Open in Browser**: Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal) to see the example project in action

### Using the React PDF Component

Once the example project is running, you can explore the source code to see how the React PDF component is integrated. Here is a brief overview:

1.  **Import the component**: Import the desired React PDF component into your codes

```tsx
import {
	RPProvider,
	RPDefaultLayout,
	RPPages,
	RPProviderProps,
	RPLayoutProps,
} from "@pdf-viewer/react";

interface Props {
	showToolbar?: boolean;
	providerProps?: RPProviderProps;
	defaultLayoutProps?: RPLayoutProps;
}

const AppPdfViewer = (props: Props) => {
	const { showToolbar = true, providerProps, defaultLayoutProps } = props;

	return (
		<RPProvider
			src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
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

export default AppPdfViewer;
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

```jsx
import { AppProviders, AppPdfViewer } from "./@repo/ui";

export default function App() {
	return (
    <AppProviders>
		<div className="w-[1028px] h-[700px] mx-auto">
			<h1>RP Starter Toolkit: Nextjs + Javascript</h1>
			<br />
			<h2>Default Toolbar</h2>
			<AppPdfViewer />
			<h2>Without Toolbar</h2>
			<AppPdfViewer showToolbar={false} />
			<h2>Mobile</h2>
			<AppPdfViewer defaultLayoutProps={{ style: { width: "500px" } }} />
		</div>
    </AppProviders>
	);
}
```

## Examples

For more examples, please refer to the `apps/web/app/page.tsx` file in this repository:

- Default Toolbar
- Without Toolbar
- Mobile View

_Remark: If you would like more examples, feel free open an issue._

For more configurations, please check the [documentation](https://docs.react-pdf.dev) site.

---

Thank you for using React PDF! We hope this toolkit helps you build amazing Next.js applications. If you have any questions or need further assistance on this example, please feel free to open an issue. Happy coding!
