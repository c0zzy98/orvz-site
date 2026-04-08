import { readdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectsDir = resolve(__dirname, "../public/projects");
const outputFile = resolve(__dirname, "../src/projects-manifest.json");

const files = readdirSync(projectsDir)
  .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f))
  .sort();

writeFileSync(outputFile, JSON.stringify(files, null, 2));
console.log(`[manifest] ${files.length} zdjęć → src/projects-manifest.json`);
