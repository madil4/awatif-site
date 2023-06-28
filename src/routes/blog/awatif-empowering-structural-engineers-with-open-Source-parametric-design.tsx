import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function IntroducingAwatif(props: any) {
  const title =
    "Awatif: Empowering Structural Engineers with Open-Source Parametric Design";
  const slug = "awatif-empowering-structural-engineers";

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
        📣 Introducing Awatif: a new, open-source, web-based parametric tool for
        structural engineers. Streamline your engineering processes and create
        more affordable, safe, and eco-friendly structures. Easily integrate
        Awatif into your existing workflows and enjoy increased productivity.
        The tool is available for free and comes with a commitment to
        sustainability and a brighter future. If you have any questions, please
        don't hesitate to reach out for further information.
      </p>

      <video width="500" class="mb-5" controls>
        <source src={`/blog/${slug}.mp4`} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </article>
  );
}
