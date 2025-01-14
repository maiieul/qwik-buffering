import { component$, Slot, type PropsOf } from "@builder.io/qwik";

// import {
//   HAccordionContent,
//   HAccordionHeader,
//   HAccordionItem,
//   HAccordionRoot,
//   HAccordionTrigger,
// } from "@qwik-ui/headless";

import {
  AccordionContent as HAccordionContent,
  AccordionHeader as HAccordionHeader,
  AccordionItem as HAccordionItem,
  AccordionTrigger as HAccordionTrigger,
  Accordion as HAccordion,
} from "@qwik-ui/headless";

import { cn } from "@qwik-ui/utils";

import { LuChevronDown } from "@qwikest/icons/lucide";

export const Accordion = (props: PropsOf<typeof HAccordion>) => (
  <HAccordion {...props} itemComponent={AccordionItem}>
    {props.children}
  </HAccordion>
);

export const AccordionItem = component$<PropsOf<typeof HAccordionItem>>(
  (props) => {
    return (
      <HAccordionItem {...props} class={cn("border-b", props.class)}>
        <Slot />
      </HAccordionItem>
    );
  },
);

export const AccordionTrigger = component$<
  PropsOf<typeof HAccordionTrigger> & {
    header?: PropsOf<typeof HAccordionHeader>["as"];
  }
>(({ header = "h3", ...props }) => {
  return (
    <HAccordionHeader as={header} class="flex">
      <HAccordionTrigger
        {...props}
        class={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-open]>svg]:rotate-180",
          props.class,
        )}
      >
        <Slot />
        <LuChevronDown class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </HAccordionTrigger>
    </HAccordionHeader>
  );
});

export const AccordionContent = component$<PropsOf<typeof HAccordionContent>>(
  (props) => {
    return (
      <HAccordionContent
        {...props}
        class={cn(
          "overflow-hidden text-sm data-[closed]:animate-accordion-up data-[open]:animate-accordion-down",
          props.class,
        )}
      >
        <div class="pb-4 pt-0">
          <Slot />
        </div>
      </HAccordionContent>
    );
  },
);
