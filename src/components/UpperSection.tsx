export const UpperSection = () => {
  return (
    <section>
      <div class="flex flex-col md:flex-row items-center py-8">
        <div class="w-full md:w-2/5 pr-10 pb-10">
          <h2 class="text-3xl">
            Online 3D parametric (algorithmic) structural engineering software
          </h2>
          <p class="pt-6">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
        </div>
        <div class="w-full h-96 md:w-3/5">
          <iframe
            class="w-full h-full"
            src="https://awatif.co/examples/2d-truss/"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
