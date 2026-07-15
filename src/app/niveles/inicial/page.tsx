import { Metadata } from "next";
import { LevelPageTemplate } from "@/components/level-page-template";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/niveles/inicial");

export default function InicialPage() {
  return <LevelPageTemplate slug="inicial" />;
}
