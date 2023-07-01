import { createSignal } from "solid-js";
import { Title } from "solid-start";

export default function Pricing() {
  const [annual, setAnnual] = createSignal(false);

  const toggleAnnual = () => {
    setAnnual((v) => !v);
  };

  return (
    <>
      <Title>Awatif - Pricing</Title>
      <h2 class="text-3xl font-bold text-center mb-10 lg:text-5xl">
        Pricing Plans
      </h2>

      <div class="form-control">
        <label class="label cursor-pointer justify-end">
          <span class="label-text mr-2">Annual Plan</span>
          <input type="checkbox" class="toggle" onclick={toggleAnnual} />
        </label>
      </div>

      <div class="grid grid-cols-1 gap-6 mx-auto text-center md:grid-cols-2 mb-10">
        <div class="overflow-hidden border-2 border-gray-100 rounded-md p-5">
          <p class="mb-4 text-lg font-medium text-gray-500">Free</p>
          <p class="text-4xl font-bold mb-5">Free</p>
          <ul class="text-left space-y-1 mb-5">
            <li>✔️ Limit of 10 projects</li>
            <li>✔️ Limit of 20 elements</li>
          </ul>
          <a
            href="https://app.awatif.co"
            target="_blank"
            class="btn btn-primary btn-wide"
          >
            Get Started
          </a>
        </div>

        <div class="overflow-hidden border-2 border-gray-100 rounded-md p-5">
          <p class="mb-4 text-lg font-medium text-gray-500">PRO</p>
          <p class="text-4xl font-bold mb-5">
            {annual() ? <>$100/y</> : <>$10/m</>}
          </p>
          <ul class="text-left space-y-1 mb-5">
            <li>✅ Unlimited projects</li>
            <li>✅ Unlimited elements</li>
          </ul>

          <a
            href="https://app.awatif.co"
            target="_blank"
            class="btn btn-primary btn-wide"
          >
            Get Started
          </a>
        </div>
      </div>

      <p class="text-sm text-center lg:w-3/4 lg:mx-auto mb-10">
        Don't trust the cloud? We can set up a local setup on your computer or
        server. Reach out at mohamed@awatif.co
      </p>
    </>
  );
}
