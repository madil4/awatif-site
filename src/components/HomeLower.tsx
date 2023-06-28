import { A } from "solid-start";

export const HomeLower = () => {
  return (
    <section class="flex flex-col space-y-10 mb-10 lg:flex-row lg:justify-between lg:items-start lg:space-y-0 lg:space-x-20">
      <div class="lg:w-2/5">
        <h3 class="text-2xl mb-3 font-bold">Features</h3>
        <ul class="space-y-2">
          <li>
            🚀 Affordable, battle-tested FEM solver for only{" "}
            <A href="/pricing" class="link">
              25$/m
            </A>
          </li>
          <li>🧱 Create complex designs with parametric modeling</li>
          <li>🌐 Design and simulate from any browser</li>
          <li>🎨 User-friendly interface</li>
        </ul>
      </div>

      <div class="lg:w-2/5">
        <h3 class="text-2xl mb-3 font-bold">Team</h3>
        <div class="flex flex-col space-y-4">
          <div class="flex flex-row items-center">
            <img
              class="w-20 h-20 rounded-full"
              src="/mohamed-adil.jpg"
              alt="Mohamed Adil"
            />
            <div class="ml-5">
              <h4 class="text-xl">Mohamed Adil - Founder</h4>
              <p class="text-sm">
                Structural engineer and software developer passionate about
                optimizing the structural design process.
              </p>
              <a
                class="text-sm font-medium link"
                href="https://www.linkedin.com/in/madil4/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div class="flex flex-row items-center">
            <img
              class="w-20 h-20 rounded-full"
              src="/empty-profile.jpg"
              alt="Mohamed Adil"
            />
            <div class="ml-5">
              <h4 class="text-xl">Join our team!</h4>
              <p class="text-sm">
                I am seeking enthusiastic software developers and structural
                engineers. Just send me a message.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-1/5">
        <h3 class="text-2xl mb-3 font-bold">Links</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://github.com/madil4/awatif"
              target="_blank"
              class="link"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/u3j2rnYrdR"
              target="_blank"
              class="link"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://mohamedadil.us19.list-manage.com/subscribe?u=80eec59eb329b1c9c00258524&id=95cfe71596"
              target="_blank"
              class="link"
            >
              Newsletter
            </a>
          </li>
          <li>
            <a href="mailto:mohamed@awatif.co" target="_blank" class="link">
              Contact Us
            </a>
          </li>
          <li>
            <A href="/terms-and-privacy" class="link">
              Terms and Privacy
            </A>
          </li>
        </ul>
      </div>
    </section>
  );
};
