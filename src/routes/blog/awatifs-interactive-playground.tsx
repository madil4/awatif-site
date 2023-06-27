import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function InteractivePlayground(props: any) {
  const title = "Awatif's Interactive Playground";
  const slug = "awatifs-interactive-playground";

  return (
    <article>
      <Title>Awatif - {title}</Title>
      <h2 class="text-2xl mb-5">
        <Show when={props.showLink} fallback={title}>
          <A href={`/blog/${slug}`} class="link link-primary">
            {title}
          </A>
        </Show>
      </h2>

      <p class="mb-5">
        Experience an interactive playground with Awatif, combining a text
        editor and user-friendly graphical interface (GUI).
      </p>

      <iframe
        class="mb-5"
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7079469591755644928?compact=1"
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
