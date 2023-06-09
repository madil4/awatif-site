import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function StayTuned(props: any) {
  const title = "Stay tuned for Awatif";
  const slug = "stay-tuned-for-awatif";

  return (
    <article>
      <Title>Awatif - {props.isBlogPage ? "Blog" : title}</Title>
      <h2 class="text-2xl mb-5">
        <Show when={props.isBlogPage} fallback={title}>
          <A href={`/blog/${slug}`} class="link">
            {title}
          </A>
        </Show>
      </h2>

      <p class="mb-5">
        Stay tuned for Awatif! Transform your design process with real-time
        parametric modeling, rapid changes, and accurate analysis
      </p>

      <video width="300" class="mb-5" poster={`/blog/${slug}.jpeg`} controls>
        <source src={`/blog/${slug}.mp4`} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </article>
  );
}
