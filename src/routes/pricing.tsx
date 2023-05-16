export default function Pricing() {
  return (
    <>
      <h2 class="text-3xl font-bold text-center mb-16 lg:text-5xl">
        Pricing Plans
      </h2>

      <div class="grid grid-cols-1 gap-6 mx-auto text-center mb-16 md:grid-cols-3">
        <div class="overflow-hidden border-2 border-gray-100 rounded-md p-5">
          <p class="mb-4 text-lg font-medium text-gray-500">Basic Plan</p>
          <p class="text-6xl font-bold mb-8">$0/Month</p>
          <ul class="space-y-1">
            <li class=" text-gray-900 lg:text-xl">
              For experimentation and learning
            </li>
            <li class=" text-red-800 lg:text-l">Limited to bar elements</li>
            <li class=" text-red-800 lg:text-l">
              Limited to linear and static analysis
            </li>
          </ul>
        </div>

        <div class="overflow-hidden border-2 border-gray-100 rounded-md p-5">
          <p class="mb-4 text-lg font-medium text-gray-500">Standard Plan</p>
          <p class="text-6xl font-bold mb-8">$25/Month</p>
          <ul class="space-y-1">
            <li class=" text-gray-900 lg:text-xl">
              For day-to-day structural design
            </li>
            <li class=" text-green-800 lg:text-l">Bar and frame elements</li>
            <li class=" text-red-800 lg:text-l">
              Limited to linear and static analysis
            </li>
          </ul>
        </div>

        <div class="overflow-hidden border-2 border-gray-100 rounded-md p-5">
          <p class="mb-4 text-lg font-medium text-gray-500">Advanced Plan</p>
          <p class="text-6xl font-bold mb-8">$75/Month</p>
          <ul class="space-y-1">
            <li class=" text-gray-900 lg:text-xl">For advanced simulations</li>
            <li class=" text-green-800 lg:text-l">Bar and frame elements </li>
            <li class=" text-green-800 lg:text-l">
              Linear, non-linear, static, dynamic analysis
            </li>
          </ul>
        </div>
      </div>

      <p class="text-sm text-center  text-gray-700 lg:w-1/2 lg:mx-auto mb-16">
        Don't trust the cloud? Don't worry! We can set up the app locally on
        your computer or server. You can reach me by dropping a message at
        mohamed@awatif.co
      </p>
    </>
  );
}
