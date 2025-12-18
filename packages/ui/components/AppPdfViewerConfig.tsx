"use client";
import { RPConfig, type RPConfigProps } from "@pdf-viewer/react";
import { type PropsWithChildren } from "react";

function AppPdfViewerConfig({
	children,
	...props
}: PropsWithChildren<RPConfigProps>) {
	return <RPConfig {...props}>{children}</RPConfig>;
}
export { AppPdfViewerConfig, type RPConfigProps };
