export const Navbar = () => {
  return (
    <nav class="flex justify-between items-center my-4">
      <div class="flex items-center">
        <img src="logo.svg" alt="Awatif" class="w-12 h-12 mr-2" />
        <a href="/" class="text-xl">
          Awatif
        </a>
      </div>

      <nav class="space-x-4">
        <a href="#" class="">
          App
        </a>
        <a href="#" class="">
          Docs
        </a>
        <a href="#" class="">
          Examples
        </a>
        <a href="#" class="">
          Blog
        </a>
        <a href="#" class="">
          Pricing
        </a>
      </nav>
    </nav>
  );
};
