import AwatifTest from "./putting-awatif-to-the-test";
import SteelDesign from "./automating-steel-building-design";
import InteractivePlayground from "./awatifs-interactive-playground";
import ParametricTruss from "./parametric-2d-truss-design";
import SimplifiedDesign from "./simplified-structural-design-with-awatif";
import { A, Title } from "solid-start";

export default function Index() {
  return (
    <>
      <div class="flex flex-col space-y-5">
        <InteractivePlayground isBlogPage={true} />
        <SteelDesign isBlogPage={true} />
        <SimplifiedDesign isBlogPage={true} />
        <AwatifTest isBlogPage={true} />
        <ParametricTruss isBlogPage={true} />
      </div>
      <div class="join mb-5">
        <A href="./" class="join-item btn btn-active">
          1
        </A>
        <A href="/blog/page/2" class="join-item btn">
          2
        </A>
        <A href="/blog/page/3" class="join-item btn">
          3
        </A>
      </div>
    </>
  );
}
