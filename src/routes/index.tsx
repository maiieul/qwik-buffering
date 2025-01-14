import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ConsumedCollapsibleUnderPrefetching from "~/components/consumed-collapsible-under-prefetching";
// import ConsumedCollapsible038 from "~/components/consumed-collapsible-038";

export default component$(() => {
  return (
    <>
      {/* <ConsumedCollapsible038 /> */}
      <ConsumedCollapsibleUnderPrefetching />
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
