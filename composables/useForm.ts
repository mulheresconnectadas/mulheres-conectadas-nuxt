import type { IFormulario } from "@/types/form";
import { useState } from "#app";

export function useForm() {
  const form = useState<IFormulario>("form", () => ({
    nome: "",
    email: "",
    data_nascimento: "",
    genero: "",
    etnia: "",
    escolaridade: "",
    contato: "",
    situacao_trabalho: "",
    rede_social: "",
    cidade: "",
    deseja_participar_presencial: "",
    como_soube_programa: "",
    autorizacao_lgpd: "",
  }));

  async function submit() {
    const response = await fetch(
      "https://back-mulheres-conectadas.vercel.app/participantes/addUser",
      {
        method: "POST",
        body: JSON.stringify(form.value),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  }

  return { form, submit };
}
