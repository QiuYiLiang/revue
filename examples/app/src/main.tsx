import { CompA } from "./CompA";
import { createElement, createRoot } from "@qiuyl/revue";

const root = createRoot(<CompA />);

root.mount(document.getElementById("root") as Element);
