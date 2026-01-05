import { createRoot, type Root } from "react-dom/client";
import { App } from "./App";

export type ShellContext = {
  assetBase: string;
  theme: "light" | "dark";
  locale?: string;
  user?: { id: string; name?: string };
  capabilities?: { navigate: (to: string) => void };
};

class MfeReactElement extends HTMLElement {
  private root: Root | null = null;
  private mount: HTMLDivElement | null = null;
  private _context: ShellContext | null = null;

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: "open" });

    const cssHref = this.getCssHref();
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssHref;
    this.shadowRoot!.appendChild(link);

    this.mount = document.createElement("div");
    this.shadowRoot!.appendChild(this.mount);

    this.root = createRoot(this.mount);
    this.render();
  }

  disconnectedCallback() {
    this.root?.unmount();
    this.root = null;
    this.mount = null;
  }

  set context(v: ShellContext) {
    this._context = v;
    if (v?.theme) this.setAttribute("theme", v.theme);
    this.render();
  }

  get context() {
    return this._context!;
  }

  private getCssHref() {
    const base = this._context?.assetBase;
    if (base) return `${base}/mfe-shadow.css`;

    return `mfe-shadow.css`;
  }

  private render() {
    if (!this.root) return;
    this.root.render(<App context={this._context} />);
  }
}

customElements.define("mfe-react", MfeReactElement);
