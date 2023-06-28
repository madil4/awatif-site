import { Title } from "solid-start";

export default function Pricing() {
  return (
    <>
      <Title>Awatif - Pricing</Title>
      <h2 class="text-3xl font-bold text-center mb-16 lg:text-5xl">
        Pricing Plans
      </h2>

      <div class="grid grid-cols-1 gap-6 mx-auto text-center mb-16 md:grid-cols-2">
        <div class="overflow-hidden border-2 border-gray-100 rounded-md p-5">
          <p class="mb-4 text-lg font-medium text-gray-500">BASIC</p>
          <p class="text-4xl font-bold mb-5">Free</p>
          <ul class="space-y-1">
            <li>For learning and evaluation</li>
            <li>All Pro features, but limited to 20 elements</li>
          </ul>
        </div>

        <div class="overflow-hidden border-2 border-gray-100 rounded-md p-5">
          <p class="mb-4 text-lg font-medium text-gray-500">PRO</p>
          <p class="text-4xl font-bold mb-5">$25/m</p>
          <ul class="space-y-1">
            <li>For day-to-day structural design</li>
            <li>Bar and frame elements</li>
          </ul>
        </div>
      </div>

      <p class="text-sm text-center lg:w-3/4 lg:mx-auto mb-10">
        Don't trust the cloud? We can set up a local setup on your computer or
        server. Reach out at mohamed@awatif.co
      </p>
    </>
  );
}
