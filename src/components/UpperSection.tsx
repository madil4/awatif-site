export const UpperSection = () => {
  return (
    <section>
      <div class="flex flex-col items-center md:flex-row my-10">
        <div class="w-full md:w-2/5 md:mr-5">
          <h2 class="text-3xl">
            Online 3D parametric (algorithmic) structural engineering software
          </h2>
          <p class="mt-5">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
        </div>
        <iframe
          class="w-full h-96 mt-5 md:w-3/5 md:mt-0"
          src="https://awatif.co/examples/2d-truss/"
        ></iframe>
      </div>
    </section>
  );
};
