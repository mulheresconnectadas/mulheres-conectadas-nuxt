<template>
  <div class="w-full max-w-md space-y-10">
    <img src="/logo-2.png" alt="Mulheres Conectadas" class="w-full mb-12" />

    <form class="space-y-10" @submit.prevent="onSubmit">
      <div>
        <label for="email" class="block text-pink-500 text-lg font-bold mb-2">
          E-mail
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Digite seu e-mail"
          class="w-full border-2 border-purple-500 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
          required
        />
      </div>

      <div>
        <label for="senha" class="block text-pink-500 text-lg font-bold mb-2">
          Senha
        </label>
        <input
          id="senha"
          v-model="form.senha"
          type="password"
          placeholder="Digite sua senha"
          class="w-full border-2 border-purple-500 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
          required
        />
      </div>

      <UButton
        type="submit"
        color="tertiary"
        class="block mx-auto bg-pink-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-pink-600 transition"
        :loading="loading"
      >
        ENTRAR
      </UButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useLogin } from "@/composables/useLogin";

const { form, submit } = useLogin();
const router = useRouter();
const toast = useToast();
definePageMeta({
  layout: "auth",
});

const loading = ref(false);

async function onSubmit() {
  try {
    loading.value = true;
    const res = await submit(form.value.email, form.value.senha);
    localStorage.setItem("nome", res.nome);
    router.push("/dashboard");
  } catch (error: unknown) {
    let msg = "Erro ao fazer login";
    if (error instanceof Error) {
      msg = error.message;
    }
    console.log("ERRO DEMAIS", error);
    toast.add({
      title: "Erro ao fazer login",
      description: msg,
      color: "error",
    });
  } finally {
    loading.value = false;
  }
}
</script>
