import { z } from "zod";

const bodySchema = z.object({
    cpf: z.string().regex(/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/m),
    password: z.string(),
  });

export { bodySchema };