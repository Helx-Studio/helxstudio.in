"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookingCalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="w-full h-full min-h-[680px] rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-neutral-200/80 overflow-hidden">
      <Cal
        namespace="30min"
        calLink="helxstudio/30min"
        style={{ width: "100%", height: "100%", minHeight: "680px", overflow: "scroll" }}
        config={{
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
          theme: "light",
        }}
      />
    </div>
  );
}
