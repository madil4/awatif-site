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

      <video width="600" class="mb-5" controls>
        <source src={`/blog/${slug}.mp4`} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </article>
  );
}
