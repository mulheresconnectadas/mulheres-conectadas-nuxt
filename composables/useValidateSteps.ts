// composables/useValidateSteps.ts
import type { IFormulario } from "~/types/form";
import { reactive } from "vue";

export function useValidateSteps() {
  interface ValidationResult {
    valid: boolean;
    missing: (keyof IFormulario)[];
  }

  const error = reactive<Partial<Record<keyof IFormulario, string>>>({});

  async function validateStep2(form: IFormulario): Promise<ValidationResult> {
    const missing: (keyof IFormulario)[] = [];
    const requiredFields: (keyof IFormulario)[] = [
      "nome",
      "email",
      "data_nascimento",
      "genero",
      "etnia",
      "escolaridade",
    ];

    // Limpa erros anteriores
    for (const field of requiredFields) {
      error[field] = undefined;
    }

    if (form.nome && /\d/.test(form.nome)) {
      console.log("Nome contém números");
      missing.push("nome");
      error["nome"] = "O nome não pode conter números";
    }

    const emailValidation = await validateEmail(form.email);
    if (!emailValidation.valid) {
      missing.push("email");
      error["email"] = "O email não é válido";
    }

    for (const field of requiredFields) {
      if (!form[field]) {
        missing.push(field);
        error[field] = `Campo "${field}" é obrigatório`;
      }
    }

    return {
      valid: missing.length === 0,
      missing,
    };
  }

  function validateStep3(form: IFormulario): ValidationResult {
    const missing: (keyof IFormulario)[] = [];
    const requiredFields: (keyof IFormulario)[] = [
      "contato",
      "situacao_trabalho",
      "rede_social",
      "cidade",
      "deseja_participar_presencial",
    ];

    // Limpa erros anteriores
    for (const field of requiredFields) {
      error[field] = undefined;
    }

    for (const field of requiredFields) {
      if (!form[field]) {
        missing.push(field);
        error[field] = `Campo "${field}" é obrigatório`;
      }
    }

    return {
      valid: missing.length === 0,
      missing,
    };
  }

  function validateStep4(form: IFormulario): ValidationResult {
    const missing: (keyof IFormulario)[] = [];
    const requiredFields: (keyof IFormulario)[] = [
      "como_soube_programa",
      "autorizacao_lgpd",
    ];

    // Limpa erros anteriores
    for (const field of requiredFields) {
      error[field] = undefined;
    }

    for (const field of requiredFields) {
      if (field === "autorizacao_lgpd" && form.autorizacao_lgpd === "nao") {
        error[field] = `Você deve aceitar a utilização de seus dados (LGPD)`;
        missing.push(field);
      }
      if (!form[field]) {
        missing.push(field);
        error[field] = `Campo "${field}" é obrigatório`;
      }
    }

    return {
      valid: missing.length === 0,
      missing,
    };
  }
  async function validateEmail(email: string) {
    const response = await fetch(
      "https://back-mulheres-conectadas.vercel.app/participantes/validar_email",
      {
        method: "POST",
        body: JSON.stringify({ email }),
      }
    );
    const data = await response.json();
    return data;
  }

  return { validateStep2, validateStep3, validateStep4, error, validateEmail };
}
