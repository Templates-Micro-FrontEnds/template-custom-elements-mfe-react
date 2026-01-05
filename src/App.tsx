import { Button } from "@/components/ui/button";
import type { ShellContext } from "@templates-micro-frontends/bridge";

export function App({ context }: { context: ShellContext | null }) {
  return (
    <div className="p-4 space-y-3">
      <div className="text-lg font-semibold">MFE React (Shadow DOM)</div>

      <div className="text-xs opacity-70">
        user: {context?.user?.id ?? "anonymous"} | theme:{" "}
        {context?.theme ?? "-"}
      </div>

      <Button onClick={() => context?.capabilities?.navigate?.("/angular")}>
        Ir pra /angular
      </Button>
      <Button onClick={() => context?.capabilities?.navigate?.("/vue")}>
        Ir pra /vue
      </Button>
    </div>
  );
}
