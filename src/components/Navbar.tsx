import { A } from "solid-start";

export const Navbar = () => {
  return (
    <div class="navbar bg-base-100 sticky top-0">
      <div class="flex-1">
        <A href="/">
          <img src="/logo.svg" alt="Awatif" class="w-10 h-10" />
        </A>
        <A href="/" class="btn btn-ghost normal-case text-xl">
          Awatif
        </A>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a
              class="px-2 lg:px-4"
              href="https://app.awatif.co"
              target="_blank"
            >
              App
            </a>
          </li>
          <li>
            <A class="px-2 lg:px-4" href="/docs">
              Docs
            </A>
          </li>
          <li>
            <A class="px-2 lg:px-4" href="/examples">
              Examples
            </A>
          </li>
          <li>
            <A class="px-2 lg:px-4" href="/blog">
              Blog
            </A>
          </li>
          <li>
            <A class="px-2 lg:px-4" href="/pricing">
              Pricing
            </A>
          </li>
        </ul>
      </div>
    </div>
  );
};
