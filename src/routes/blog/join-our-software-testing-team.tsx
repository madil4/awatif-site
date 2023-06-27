import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function TestingTeam(props: any) {
  const title = "Join our Software Testing Team";
  const slug = "join-our-software-testing-team";

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
        I'm looking for structural engineers who want to take their engineering
        skills to the next level to help me test a new software in this old
        industry. I just want you to use the product and tell me what to do next
        that can add value to you. Reach out to me here on LinkedIn.
      </p>

      <iframe
        class="mb-5"
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7063070455108136960?compact=1"
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
