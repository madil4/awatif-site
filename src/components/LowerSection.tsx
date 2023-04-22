export const LowerSection = () => {
  return (
    <section class="flex flex-col space-y-10 mb-5 md:flex-row md:justify-between md:items-start md:space-y-0 md:space-x-20">
      <div class="md:w-1/3">
        <h3 class="text-2xl mb-3">Features</h3>
        <ul class="space-y-2">
          <li>🔥 Easy to use </li>
          <li>🔥 Runs on any browser</li>
          <li>🔥 Allow parametric modeling</li>
          <li>🔥 All dynamic and non-linear simulation</li>
        </ul>
      </div>
      <div class="md:w-1/3">
        <h3 class="text-2xl mb-3">Team</h3>
        <div class="flex flex-col space-y-4">
          <div class="flex flex-row items-center">
            <img
              class="w-20 h-20 rounded-full"
              src="/mohamed-adil.jpg"
              alt="Mohamed Adil"
            />
            <div class="ml-5">
              <h4 class="text-xl">Mohamed adil - Founder</h4>
              <p class="text-sm">
                A full-stack software developer and an ex structural engineer
                with the ambition to improve structural design processes.
              </p>
              <a
                class="text-sm font-medium"
                href="https://www.linkedin.com/in/madil4/"
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
              <h4 class="text-xl">Are you next?</h4>
              <p class="text-sm">
                We our looking for enthusiastic software developers and
                structural engineers to join our team. Just drop us a message
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-1/3">
        <h3 class="text-2xl mb-3">Links</h3>
        <ul>
          <li>
            <a href="https://github.com/madil4/awatif">GitHub</a>
          </li>
          <li>
            <a href="https://app.slack.com/client/T047EBMMPD5/">Slack</a>
          </li>
          <li>
            <a href="https://mohamedadil.us19.list-manage.com/subscribe?u=80eec59eb329b1c9c00258524&id=95cfe71596">
              Newsletter
            </a>
          </li>
          <li>
            <a href="mailto:mohamed@awatif.co">Contact Us</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
