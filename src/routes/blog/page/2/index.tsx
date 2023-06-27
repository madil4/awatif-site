import TestingTeam from "../../join-our-software-testing-team";
import IntroducingAwatif from "../../awatif-empowering-structural-engineers-with-open-Source-parametric-design";
import StayTuned from "../../stay-tuned-for-awatif";
import Awatif3D from "../../awatif-engine-has-gone-3d";
import InteractStructure from "../../how-to-interact-with-your-structure";
import { A } from "solid-start";

export default function Index() {
  return (
    <>
      <div class="flex flex-col space-y-5">
        <TestingTeam showLink={true} />
        <IntroducingAwatif showLink={true} />
        <Awatif3D showLink={true} />
        <StayTuned showLink={true} />
        <InteractStructure showLink={true} />
      </div>
      <div class="mb-5">
        <A href="/blog/page/3">Next Page</A>
      </div>
    </>
  );
}
