export const HomeUpper = () => {
  return (
    <section class="flex flex-col items-center md:flex-row mb-10">
      <div class="w-full md:w-2/5 md:mr-5">
        <h2 class="text-3xl">
          Online 3D parametric (algorithmic) structural engineering software
        </h2>
        <p class="mt-5">
          Design and analyze trusses, frames, and beams with ease using our
          modern structural engineering software
        </p>
      </div>
      <iframe
        class="w-full h-96 mt-5 md:w-3/5 md:mt-0"
        src="https://awatif.co/examples/2d-truss/"
      ></iframe>
    </section>
  );
};
