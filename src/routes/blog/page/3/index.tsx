import { A, Title } from "solid-start";
import NonlinearFEM from "../../linear-fem-vs-non-linear-fem";
import NewWebsite from "../../new-website-for-awatif-engine";
import InteractiveSimulation from "../../the-first-step-toward-interactive-simulation";
import SimulationExplode from "../../when-simulations-explode";

export default function Index() {
  return (
    <>
      <div class="flex flex-col space-y-5">
        <NewWebsite isBlogPage={true} />
        <NonlinearFEM isBlogPage={true} />
        <SimulationExplode isBlogPage={true} />
        <InteractiveSimulation isBlogPage={true} />
      </div>
      <div class="join mb-5">
        <A href="/blog" class="join-item btn">
          1
        </A>
        <A href="/blog/page/2" class="join-item btn">
          2
        </A>
        <A href="./" class="join-item btn btn-active">
          3
        </A>
      </div>
    </>
  );
}
