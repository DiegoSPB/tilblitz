import { DefaultCtx, SessionContext, DefaultPublicData } from "blitz"

export type User = {
  id: String
}

declare module "blitz" {
  export interface Ctx extends DefaultCtx {
    session: SessionContext
  }

  export interface PublicData extends DefaultPublicData {
    userId: User["id"]
  }
}
