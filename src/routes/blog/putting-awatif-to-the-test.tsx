import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Title } from "solid-start";

export default function AwatifTest(props: any) {
  const title = "Putting Awatif to the Test";
  const slug = "putting-awatif-to-the-test";

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
        My friend{" "}
        <a href="https://www.linkedin.com/in/mitchellrademaker/">
          Mitchell Rademaker
        </a>{" "}
        offered to help test Awatif, which is the first online parametric
        structural engineering software. I told him to be ruthless with it, and
        he responded that he would do his worst 😅. I was amused by how he
        managed to script a sphere model in a fraction of the time and with just
        a few lines of code. The script can serve as the foundation for
        designing a dome roof or a similar structure.
      </p>

      <iframe
        class="mb-5"
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7067799407315800064?compact=1"
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
