export const HomeUpper = () => {
  return (
    <section class="flex flex-col items-center lg:flex-row mb-10">
      <div class="lg:w-1/2  lg:pr-14">
        <h2 class="text-3xl mb-5">
          The First Online Parametric Structural Engineering Software
        </h2>
        <p class="mb-5">
          Design and analyze trusses, frames, and beams with ease using our
          modern structural engineering software.
        </p>
      </div>
      <img
        class="lg:w-1/2 rounded-md"
        src="../3d-truss-analysis.jpg"
        alt="3d truss analysis"
      />
    </section>
  );
};
