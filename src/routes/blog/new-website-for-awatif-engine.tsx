import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function NewWebsite(props: any) {
  const title = "New website for Awatif Engine";
  const slug = "new-website-for-awatif-engine";

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
        was surprised by the amount of enthusiasm and engagement that I got from
        my previous posts about the new project. So I decided to take it more
        seriously and give the project the name Awatif and a website{" "}
        <A href="/">awatif.co</A>. The goal of the blog is to keep you posted
        with the latest updates and have interesting discussions. Please don't
        hesitate to share your thoughts and feedback, they are really leading
        the progress.
      </p>

      <img src={`/blog/${slug}.gif`} class="mb-5" />
    </article>
  );
}
