import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function SimplifiedDesign(props: any) {
  const title = "Simplified Structural Design with Awatif";
  const slug = "simplified-structural-design-with-awatif";

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
        You don’t have to be a programmer to use Awatif for your structural
        design. You can simply define your inputs, such as loads and supports,
        and obtain outputs such as stresses and deformations in an interactive
        environment that helps you explore more with less.You don’t have to be a
        programmer to use Awatif for your structural design. You can simply
        define your inputs, such as loads and supports, and obtain outputs such
        as stresses and deformations in an interactive environment that helps
        you explore more with less.
      </p>

      <iframe
        class="mb-5"
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7070824825983791104?compact=1"
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
