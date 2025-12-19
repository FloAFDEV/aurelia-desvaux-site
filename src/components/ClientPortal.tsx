"use client";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
	children: ReactNode;
};

export const ClientPortal = ({ children }: Props) => {
	if (typeof document === "undefined") return null;
	return createPortal(children, document.body);
};
