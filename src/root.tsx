// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { createScriptLoader } from "@solid-primitives/script-loader";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>
          Awatif - The First Online Parametric Structural Engineering Software
        </Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta
          name="description"
          content="Design and analyze trusses, frames, and beams with ease using our modern structural engineering software"
        />
        <Meta
          name="keywords"
          content="engineering, design, computational, fem, bim, parametric, structural, awatif"
        />
        <Meta name="author" content="Mohamed Adil" />
        <Meta name="robots" content="index, follow" />
      </Head>
      <Body>
        {createScriptLoader({
          src: "https://plausible.io/js/script.js",
        })}
        <Suspense>
          <ErrorBoundary>
            <div class="flex flex-col min-h-screen">
              <Navbar />
              <div class="flex-grow max-w-screen-xl mx-auto px-5">
                <Routes>
                  <FileRoutes />
                </Routes>
              </div>
              <Footer />
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
