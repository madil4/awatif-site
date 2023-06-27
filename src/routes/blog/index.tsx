import AwatifTest from "./putting-awatif-to-the-test";
import SteelDesign from "./automating-steel-building-design";
import InteractivePlayground from "./awatifs-interactive-playground";
import ParametricTruss from "./parametric-2d-truss-design";
import SimplifiedDesign from "./simplified-structural-design-with-awatif";
import { A } from "solid-start";

export default function Index() {
  return (
    <>
      <div class="flex flex-col space-y-5">
        <InteractivePlayground showLink={true} />
        <SteelDesign showLink={true} />
        <SimplifiedDesign showLink={true} />
        <AwatifTest showLink={true} />
        <ParametricTruss showLink={true} />
      </div>
      <div class="mb-5">
        <A href="/blog/page/2">Next Page</A>
      </div>
    </>
  );
}
