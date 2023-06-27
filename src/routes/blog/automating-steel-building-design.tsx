import { A } from "@solidjs/router";
import { Show } from "solid-js";

export default function SteelDesign(props: any) {
  const title = "Automating Steel Building Design";
  const slug = "automating-steel-building-design";

  return (
    <article>
      <h2 class="text-2xl mb-5">
        <Show when={props.showLink} fallback={title}>
          <A href={`/blog/${slug}`}>{title}</A>
        </Show>
      </h2>

      <p class="mb-5">
        I'm partnering up with{" "}
        <a href="https://www.linkedin.com/in/parishith-jayan-985b199a/">
          Parishith Jayan
        </a>
        . He is an expert in steel building design, such as warehouses, airport
        hangars, and similar pre-engineered structures. We are determined to
        automate the engineering process from defining design parameters to
        optimizing for weight and cost. Reach out to us if you have an exciting
        project to automate.
      </p>

      <iframe
        class="mb-5"
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7076479239671144448?compact=1"
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
