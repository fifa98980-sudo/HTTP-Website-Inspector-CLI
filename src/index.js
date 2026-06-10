import { readUrlsFromFile } from "./readUrls.js";

async function main() {
  const urls = await readUrlsFromFile("urls.txt");

  console.log(urls);
}

main();