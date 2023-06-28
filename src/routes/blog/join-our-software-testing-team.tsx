import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function TestingTeam(props: any) {
  const title = "Join our Software Testing Team";
  const slug = "join-our-software-testing-team";

  return (
    <article>
      <Title>Awatif - {props.isBlogPage ? "Blog" : title}</Title>
      <h2 class="text-2xl mb-5">
        <Show when={props.isBlogPage} fallback={title}>
          <A href={`/blog/${slug}`} class="link link-primary">
            {title}
          </A>
        </Show>
      </h2>

      <p class="mb-5">
        I'm looking for structural engineers who want to take their engineering
        skills to the next level to help me test a new software in this old
        industry. I just want you to use the product and tell me what to do next
        that can add value to you. Reach out to me here on LinkedIn.
      </p>

      <video width="500" class="mb-5" controls>
        <source src={`/blog/${slug}.mp4`} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </article>
  );
}
