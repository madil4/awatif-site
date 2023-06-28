import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function SimplifiedDesign(props: any) {
  const title = "Simplified Structural Design with Awatif";
  const slug = "simplified-structural-design-with-awatif";

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
        You don’t have to be a programmer to use Awatif for your structural
        design. You can simply define your inputs, such as loads and supports,
        and obtain outputs such as stresses and deformations in an interactive
        environment that helps you explore more with less.You don’t have to be a
        programmer to use Awatif for your structural design. You can simply
        define your inputs, such as loads and supports, and obtain outputs such
        as stresses and deformations in an interactive environment that helps
        you explore more with less.
      </p>

      <video width="600" class="mb-5" controls>
        <source src={`/blog/${slug}.mp4`} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </article>
  );
}
