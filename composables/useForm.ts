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
    como_sobre_programa: "",
    autorizacao_lgpd: "",
  }));

  async function submit() {
    console.clear();
    console.log("FORM", form.value);
    const response = await fetch(
      "https://back-mulheres-conectadas.vercel.app/participantes/addUser",
      {
        method: "POST",
        body: JSON.stringify(form.value),
      }
    );
    console.log("RESPONSE", response);
    const data = await response.json();
    console.log("DATA", data);
    return data;
  }

  return { form, submit };
}
