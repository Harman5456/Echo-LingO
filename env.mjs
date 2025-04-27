import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    GOOGLE_TRANSLATE_API_KEY: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    GOOGLE_TRANSLATE_API_KEY: process.env.GOOGLE_TRANSLATE_API_KEY,
  },
}) 