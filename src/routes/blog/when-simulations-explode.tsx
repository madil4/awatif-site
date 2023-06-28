import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function SimulationExplode(props: any) {
  const title = "When Simulations Explode";
  const slug = "when-simulations-explode";

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
        Last week I showed some pretty animations{" "}
        <A href="../blog/the-first-step-toward-interactive-simulation">
          The first step toward interactive simulation
        </A>{" "}
        but here is the dark side of the story. As soon as I increase
        stiffness's explicit analysis fails (explodes). Thus, an implicit
        integration scheme is used to safeguard the animation. Unfortunately,
        there is no free lunch! it is computationally expensive and generates
        numerical damping. In future updates, we will tackle these issues, for
        now, I just want a simulation that doesn't explode.
      </p>

      <video width="600" class="mb-5" controls>
        <source src={`/blog/${slug}.mp4`} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </article>
  );
}
