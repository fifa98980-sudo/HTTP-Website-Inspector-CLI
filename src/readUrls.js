import { readFile } from "fs/promises";

export function parseUrlsFromText(fileContent) {
  return fileContent
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export async function readUrlsFromFile(filePath) {
  const fileContent = await readFile(filePath, "utf-8");

  return parseUrlsFromText(fileContent);
}