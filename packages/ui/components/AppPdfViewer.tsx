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
