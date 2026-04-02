import { getLinks, getAllSignals } from "./registry.js";
import { printTodayActions, saveTodayActions } from "./actions.js";
import { printCaptions, saveCaptions } from "./captions.js";

const command = process.argv[2];

function showHelp() {
  console.log(`
SoulSound Signal Engine

Commands:
  node growth_engine/index.js today
  node growth_engine/index.js captions
  node growth_engine/index.js links
  node growth_engine/index.js signals
  node growth_engine/index.js save:today
  node growth_engine/index.js save:captions
`);
}

function printLinks() {
  const links = getLinks();

  console.log("\nSoulSound Signal Engine — Links\n");

  links.forEach((link, index) => {
    console.log(`${index + 1}. ${link.label}`);
    console.log(`   Type: ${link.type} | Platform: ${link.platform}`);
    console.log(`   URL: ${link.url}\n`);
  });
}

switch (command) {
  case "today":
    printTodayActions();
    break;

  case "captions":
    printCaptions();
    break;

  case "links":
    printLinks();
    break;

  case "signals":
    console.log(JSON.stringify(getAllSignals(), null, 2));
    break;

  case "save:today":
    saveTodayActions();
    break;

  case "save:captions":
    saveCaptions();
    break;

  default:
    showHelp();
}
