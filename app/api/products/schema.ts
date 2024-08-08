import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Must be 3 or more characters" }),
  price: z.number().max(100),
});

export default schema;
