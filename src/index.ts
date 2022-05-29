import printNodes from "./printNodes";
import type { Args } from "./printNodes";
import toConsole from "./toConsole";

const a2bt = (args: Args) => toConsole(printNodes(args));
export default a2bt;
