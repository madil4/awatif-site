import TestingTeam from "../../join-our-software-testing-team";
import IntroducingAwatif from "../../awatif-empowering-structural-engineers-with-open-Source-parametric-design";
import StayTuned from "../../stay-tuned-for-awatif";
import Awatif3D from "../../awatif-engine-has-gone-3d";
import InteractStructure from "../../how-to-interact-with-your-structure";
import { A, Title } from "solid-start";

export default function Index() {
  return (
    <>
      <Title>Awatif - Blog</Title>
      <div class="flex flex-col space-y-5">
        <TestingTeam showLink={true} />
        <IntroducingAwatif showLink={true} />
        <StayTuned showLink={true} />
        <Awatif3D showLink={true} />
        <InteractStructure showLink={true} />
      </div>
      <div class="join mb-5">
        <A href="/blog" class="join-item btn">
          1
        </A>
        <A href="./" class="join-item btn btn-active">
          2
        </A>
        <A href="/blog/page/3" class="join-item btn">
          3
        </A>
      </div>
    </>
  );
}
