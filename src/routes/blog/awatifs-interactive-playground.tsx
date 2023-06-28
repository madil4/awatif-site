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

      <video width="600" class="mb-5" controls>
        <source src={`/blog/${slug}.mp4`} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </article>
  );
}
