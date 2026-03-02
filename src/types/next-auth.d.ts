import { OrgType } from "@prisma/client";
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    role?: "driver" | "organization";
    orgType?: OrgType;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: "driver" | "organization";
      orgType?: OrgType;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: "driver" | "organization";
    orgType?: OrgType;
  }
}
