export const Navbar = () => {
  return (
    <nav class="flex justify-between border-b-2 py-2">
      <div class="flex items-center">
        <img src="logo.svg" alt="Awatif" class="w-12 h-12 mr-2" />
        <a href="/" class="text-xl">
          Awatif
        </a>
      </div>

      <div class="flex items-center space-x-4">
        <a href="#" class="">
          App
        </a>
        <a href="#" class="">
          Docs
        </a>
      </div>
    </nav>
  );
};
