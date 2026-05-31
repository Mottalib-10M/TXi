"use client";

import { useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { setUserProperties } from "@/lib/analytics";

function AnalyticsUserProperties() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      const user = session.user as { role?: string; orgType?: string };
      setUserProperties({
        user_role: user.role,
        org_type: user.orgType,
      });
    }
  }, [session]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AnalyticsUserProperties />
      {children}
    </SessionProvider>
  );
}
