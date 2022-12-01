import React, {ComponentType, StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {RecoilRoot} from "recoil";
import {HelmetProvider} from "react-helmet-async";
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <RecoilRoot>
        <HelmetProvider>
            <App />
        </HelmetProvider>
      </RecoilRoot>
    </StrictMode>,
  );
}

export default render;
