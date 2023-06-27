export const HomeUpper = () => {
  return (
    <section class="flex flex-col items-center lg:flex-row mb-10">
      <div class="lg:w-1/2  lg:pr-14">
        <h1 class="text-3xl font-bold mb-5">
          The First Online Parametric Structural Engineering Software
        </h1>
        <p class="mb-5">
          Design and analyze trusses, frames, and beams with ease using our
          modern structural engineering software.
        </p>
        <a
          href="https://app.awatif.co"
          target="_blank"
          class="btn btn-primary mb-5"
        >
          Get Started
        </a>
      </div>
      <img
        class="lg:w-1/2 rounded-md shadow-2xl my-5"
        src="/3d-truss-analysis.jpg"
        alt="3d truss analysis"
      />
    </section>
  );
};
