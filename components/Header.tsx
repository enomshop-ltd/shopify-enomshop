import Cart from "../islands/Cart.tsx";

export function Header() {
  return (
    <header class="h-[80px] sm:!h-[100px] w-full relative">
      <nav class="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <div>
            <a class="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
              <img
                class="me-2"
                src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                style="height: 20px"
                alt="TE Logo"
                loading="lazy" />
              <span class="text-black dark:text-white">TW Elements</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
