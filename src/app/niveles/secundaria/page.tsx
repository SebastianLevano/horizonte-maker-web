import { Metadata } from "next";
import { LevelPageTemplate } from "@/components/level-page-template";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("/niveles/secundaria");

export default function SecundariaPage() {
  return <LevelPageTemplate slug="secundaria" />;
}
