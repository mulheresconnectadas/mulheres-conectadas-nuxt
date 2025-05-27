import type { ILogin } from "@/types/form";
export function useLogin() {
  const form = useState<ILogin>("form", () => ({
    email: "",
    senha: "",
  }));

  // composable.ts
  async function submit(email: string, senha: string) {
    const response = await fetch(
      "https://back-mulheres-conectadas-a973wtbji.vercel.app/participantes/admin/login",
      {
        method: "POST",
        body: JSON.stringify({ email, senha }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { message: "Erro desconhecido." };
      }
      console.log("ERROR DATA", errorData);

      throw new Error(
        errorData.detail[0].msg || errorData.detail || `Erro ${response.status}`
      );
    }

    return await response.json();
  }

  return { submit, form };
}
