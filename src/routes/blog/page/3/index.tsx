import { A } from "solid-start";
import NonlinearFEM from "../../linear-fem-vs-non-linear-fem";
import NewWebsite from "../../new-website-for-awatif-engine";
import InteractiveSimulation from "../../the-first-step-toward-interactive-simulation";
import SimulationExplode from "../../when-simulations-explode";

export default function Index() {
  return (
    <div class="flex flex-col space-y-5">
      <NewWebsite showLink={true} />
      <NonlinearFEM showLink={true} />
      <SimulationExplode showLink={true} />
      <InteractiveSimulation showLink={true} />
    </div>
  );
}
