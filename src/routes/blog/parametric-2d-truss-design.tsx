import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function ParametricTruss(props: any) {
  const title = "Parametric 2D Truss Design";
  const slug = "parametric-2d-truss-design";

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
        A fully parametrized 2D truss can be achieved using only 50 lines of
        code, eliminating the need for Rhino/Grasshopper or Revit/Dynamo. All
        that is necessary is a device with an internet browser.
      </p>

      <video width="600" class="mb-5" poster={`/blog/${slug}.jpeg`} controls>
        <source src={`/blog/${slug}.mp4`} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </article>
  );
}
