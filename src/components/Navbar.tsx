import { A } from "solid-start";

export const Navbar = () => {
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

      <nav class="space-x-4">
        <a href="https://app.awatif.co">App</a>
        <a href="#">Docs</a>
        <a href="#">Examples</a>
        <a href="#">Blog</a>
        <a href="#">Pricing</a>
      </nav>
    </nav>
  );
};
