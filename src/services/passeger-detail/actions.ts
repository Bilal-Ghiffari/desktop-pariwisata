import { revalidatePath } from "next/cache";
import { ActionResult } from "./type.types";
import { schemaPasseger } from "./validation";
import { redirect } from "next/navigation";
import { create } from "./http";

export async function savePassagerDetail(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  const values = schemaPasseger.safeParse({
    fullName: formData.get("fullName"),
    citizenship: formData.get("citizenship"),
    pasport: formData.get("pasport"),
    nik: formData.get("nik"),
    passegerType: formData.get("passegerType"),
  });

  if (!values.success) {
    const errorDesc = values.error.issues.map((issues) => issues.message);
    return {
      errorTitle: "Error",
      errorDesc,
    };
  }

  try {
    await create("/api/v1/payment", values.data);
  } catch (error) {}

  revalidatePath("/payment");
  redirect("/payment");
}
