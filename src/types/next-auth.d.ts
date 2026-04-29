import { OrgType } from "@prisma/client";
import "next-auth";
import "next-auth/jwt";

interface ImpersonatingFrom {
  id: string;
  email: string;
  name: string;
}

declare module "next-auth" {
  interface User {
    role?: "driver" | "organization";
    orgType?: OrgType;
    phone?: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: "driver" | "organization";
      orgType?: OrgType;
      phone?: string;
      impersonatingFrom?: ImpersonatingFrom;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: "driver" | "organization";
    orgType?: OrgType;
    phone?: string;
    impersonatingFrom?: ImpersonatingFrom;
  }
}
