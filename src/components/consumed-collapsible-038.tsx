import { component$, useStyles$ } from "@builder.io/qwik";
import { LuChevronDown } from "@qwikest/icons/lucide";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@qwik-ui/headless";

export default component$(() => {
  useStyles$(styles);

  return (
    <Collapsible class="collapsible">
      <CollapsibleTrigger class="collapsible-trigger">
        <span>Trigger</span>
        <LuChevronDown />
      </CollapsibleTrigger>
      <CollapsibleContent class="collapsible-content collapsible-content-outline ">
        Content
      </CollapsibleContent>
    </Collapsible>
  );
});

// internal
import styles from "./collapsible.css?inline";
