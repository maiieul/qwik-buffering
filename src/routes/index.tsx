import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Accordion } from "~/components/ui";

export default component$(() => {
  return (
    <>
      <Accordion.Root class="w-full">
        <Accordion.Item>
          <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
          <Accordion.Content>
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Trigger>Is it styled?</Accordion.Trigger>
          <Accordion.Content>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Trigger>Is it animated?</Accordion.Trigger>
          <Accordion.Content>
            Yes. It's animated by default, but you can disable it if you prefer.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
