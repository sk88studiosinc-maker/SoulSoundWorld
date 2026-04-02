import { printTodayActions, saveTodayActions } from "./actions.js";
import { printCaptions, saveCaptions } from "./captions.js";
import { getAllSignals } from "./registry.js";

const command = process.argv[2];

function showHelp() {
  console.log(`
SoulSound Signal Engine

Commands:
  node growth_engine/index.js today
  node growth_engine/index.js captions
  node growth_engine/index.js signals
  node growth_engine/index.js save:today
  node growth_engine/index.js save:captions
`);
}

switch (command) {
  case "today":
    printTodayActions();
    break;

  case "captions":
    printCaptions();
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
