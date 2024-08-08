import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Must be 3 or more characters" }),
  email: z.string().email(),
});

export default schema;
