"use client";
import { RPConfig, type RPConfigProps } from "@react-pdf-kit/viewer";
import { type PropsWithChildren } from "react";

function AppPdfViewerConfig({
	children,
	...props
}: PropsWithChildren<RPConfigProps>) {
	return <RPConfig {...props}>{children}</RPConfig>;
}
export { AppPdfViewerConfig, type RPConfigProps };
