import { Show, createSignal } from "solid-js";
import { A } from "solid-start";

export const Navbar = () => {
  let [mobileMenuOn, setMobileMenuOn] = createSignal(false);

  return (
    <nav class="flex justify-between items-center my-4">
      <div class="flex items-center">
        <A href="/">
          <img src="logo.svg" alt="Awatif" class="w-12 h-12 mr-2" />
        </A>
        <A href="/" class="text-xl">
          Awatif
        </A>
      </div>

      <div>
        <div class="hidden space-x-4 md:block">
          <a href="https://app.awatif.co">App</a>
          <a href="#">Docs</a>
          <a href="#">Examples</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
        </div>

        <button
          onclick={() => setMobileMenuOn(!mobileMenuOn())}
          class="text-3xl md:hidden"
        >
          <Show when={mobileMenuOn()}>x</Show>
          <Show when={!mobileMenuOn()}>☰</Show>
        </button>

        <Show when={mobileMenuOn()}>
          <div class="md:hidden absolute flex flex-col items-center py-4 mt-5 space-y-4 bg-white left-6 right-6 drop-shadow-md">
            <a href="https://app.awatif.co">App</a>
            <a href="#">Docs</a>
            <a href="#">Examples</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
          </div>
        </Show>
      </div>
    </nav>
  );
};
