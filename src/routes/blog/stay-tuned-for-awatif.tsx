import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function StayTuned(props: any) {
  const title = "Stay tuned for Awatif";
  const slug = "stay-tuned-for-awatif";

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
        Stay tuned for Awatif! Transform your design process with real-time
        parametric modeling, rapid changes, and accurate analysis
      </p>

      <iframe
        class="mb-5"
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7034906005125623808?compact=1"
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
