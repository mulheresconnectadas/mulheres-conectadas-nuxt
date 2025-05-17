export function useDashboard() {
  const user = ref<string | null>(null);
  if (import.meta.client) {
    user.value = localStorage.getItem("nome");
  }

  const por_cidade = ref<{ labels: string[]; data: number[] }>({
    labels: [],
    data: [],
  });

  const por_escolaridade = ref<{ labels: string[]; data: number[] }>({
    labels: [],
    data: [],
  });
  const por_situacao_trabalho = ref<{ labels: string[]; data: number[] }>({
    labels: [],
    data: [],
  });
  const top_cidades = ref<{
    labels: string[];
    datasets: { label: string; data: number[] }[];
  }>({
    labels: [],
    datasets: [],
  });
  const escolaridade_por_etnia = ref<{
    labels: string[];
    datasets: { label: string; data: number[] }[];
  }>({
    labels: [],
    datasets: [],
  });

  async function getStats() {
    const response = await fetch(
      "https://back-mulheres-conectadas.vercel.app/participantes/inscricoes/stats",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar estatísticas");
    }
    const data = await response.json();

    por_cidade.value = data.por_cidade;
    por_escolaridade.value = data.por_escolaridade;
    por_situacao_trabalho.value = data.por_situacao_trabalho;
  }

  async function getEscolaridade() {
    const response = await fetch(
      "https://back-mulheres-conectadas.vercel.app/participantes/escolaridade_por_etnia",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar escolaridade");
    }
    const data = await response.json();

    escolaridade_por_etnia.value = data;
  }

  async function getTopCidades() {
    const response = await fetch(
      "https://back-mulheres-conectadas.vercel.app/participantes/presencial_top_cidades",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar top cidades");
    }
    const data = await response.json();

    top_cidades.value = data;
  }

  onMounted(async () => {
    await getEscolaridade();
    await getStats();
    await getTopCidades();
  });
  return {
    user,
    getStats,
    por_cidade,
    por_escolaridade,
    por_situacao_trabalho,
    top_cidades,
    escolaridade_por_etnia,
    getEscolaridade,
    getTopCidades,
  };
}
