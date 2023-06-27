import { A } from "@solidjs/router";
import { Show } from "solid-js";

export default function IntroducingAwatif(props: any) {
  const title =
    "Awatif: Empowering Structural Engineers with Open-Source Parametric Design";
  const slug =
    "awatif-empowering-structural-engineers-with-open-Source-parametric-design";

  return (
    <article>
      <h2 class="text-2xl mb-5">
        <Show when={props.showLink} fallback={title}>
          <A href={`/blog/${slug}`}>{title}</A>
        </Show>
      </h2>

      <p class="mb-5">
        📣 Introducing Awatif: a new, open-source, web-based parametric tool for
        structural engineers. Streamline your engineering processes and create
        more affordable, safe, and eco-friendly structures. Easily integrate
        Awatif into your existing workflows and enjoy increased productivity.
        The tool is available for free and comes with a commitment to
        sustainability and a brighter future. If you have any questions, please
        don't hesitate to reach out for further information.
      </p>

      <iframe
        class="mb-5"
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7035941135336230913?compact=1"
        height="399"
        width="710"
        frameborder="0"
        /* @ts-expect-error */
        allowfullscreen=""
        title="Embedded post"
      ></iframe>
    </article>
  );
}
