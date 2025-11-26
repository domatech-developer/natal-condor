"use client";
import { FC, ReactNode } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

const MainDefault: FC<{ id: string; children: ReactNode }> = ({ id, children }) => {
  useActiveSection("section", "isElementFullyVisible", "active");

  return <main id={id}>{children}</main>;
};

export default MainDefault;
