"use client";

import i18n from "@/lib/i18n";
import React from "react";
import { I18nextProvider as I8NextProvider } from "react-i18next";

type Props = {
  children: React.ReactNode;
};

export default function I18NextProvider({ children }: Props) {
  return (
    <I8NextProvider i18n={i18n} defaultNS={"translation"}>
      {children}
    </I8NextProvider>
  );
}
