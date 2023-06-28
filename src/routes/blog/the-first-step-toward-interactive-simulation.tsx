import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function InteractiveSimulation(props: any) {
  const title = "The first step toward interactive simulation";
  const slug = "the-first-step-toward-interactive-simulation";

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
        Here is a teaser of what I'm working on now. The idea is to experience
        interactive simulations for structural analysis. What I'm showing is
        just a baby step; there is a lot to be done such as:
      </p>

      <ul class="ml-5 space-y-2 mb-5">
        <li> - Python is slow. C++ is the way to go.</li>
        <li>
          - Explicit time integration is unstable with large time steps. Thus,
          implicit integration is more feasible in this case.
        </li>
        <li>- 2D elements are boring. The 3D world is wonderful.</li>
        <li>
          - Linear Elasticity model is very limiting. Non-linear large
          deformations model enable vivid motions and capture buckling
          phenomena.
        </li>
      </ul>

      <p class="mb-5">
        Phew! that is a challenge, but I'm up for it...please share your
        thoughts, your feedbacks are valuable (:
      </p>

      <video width="600" class="mb-5" controls>
        <source src={`/blog/${slug}.mp4`} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </article>
  );
}
