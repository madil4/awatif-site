import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function SteelDesign(props: any) {
  const title = "Automating Steel Building Design";
  const slug = "automating-steel-building-design";

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

      <video width="600" class="mb-5" poster={`/blog/${slug}.jpeg`} controls>
        <source src={`/blog/${slug}.mp4`} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </article>
  );
}
