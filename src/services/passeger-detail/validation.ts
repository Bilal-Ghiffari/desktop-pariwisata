import { z } from "zod";

export const schemaPasseger = z.object({
  fullName: z.string({ required_error: "nama lengkap harus diisi" }),
  citizenship: z.string({ required_error: "kewarganegaraan harus diisi" }),
  pasport: z.string({ required_error: "pasport harus diisi" }),
  nik: z.string({ required_error: "nomor nik harus diisi" }),
  passegerType: z.string({ required_error: "passeger type harus diisi" }),
});
