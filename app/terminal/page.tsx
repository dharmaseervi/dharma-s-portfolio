import type { Metadata } from "next";
import Terminal from "../components/v2/Terminal";

export const metadata: Metadata = {
  title: "Terminal — Dharma Seervi",
  description: "dharma@portfolio:~$ — an interactive terminal view of my work.",
  robots: { index: false }, // easter egg — no need to compete with the homepage in search
};

export default function TerminalPage() {
  return <Terminal />;
}
