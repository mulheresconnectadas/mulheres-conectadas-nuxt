export function useExport() {
  async function exportToCsv() {
    const response = await fetch(
      "https://back-mulheres-conectadas-dusky.vercel.app/participantes/exportar_inscricoes",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Erro ao exportar dados");
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inscricoes.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  async function exportInscritosPorCidade() {
    const response = await fetch(
      "https://back-mulheres-conectadas-dusky.vercel.app/participantes/inscricoes/stats/cidade/csv",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Erro ao exportar dados");
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inscricoes_por_cidade.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  async function exportInscritosPorSituacaoTrabalho() {
    const response = await fetch(
      "https://back-mulheres-conectadas-dusky.vercel.app/participantes/inscricoes/stats/situacao_trabalho/csv",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Erro ao exportar dados");
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inscricoes_por_situacao_trabalho.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  async function exportInscritosPorEscolaridade() {
    const response = await fetch(
      "https://back-mulheres-conectadas-dusky.vercel.app/participantes/inscricoes/stats/escolaridade/csv",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Erro ao exportar dados");
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inscricoes_por_escolaridade.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  async function exportInscritosPorEscolaridadeEEtnia() {
    const response = await fetch(
      "https://back-mulheres-conectadas-dusky.vercel.app/participantes/escolaridade_por_etnia/csv",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Erro ao exportar dados");
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inscricoes_por_etnia.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  async function exportTopCidadesPresenciais() {
    const response = await fetch(
      "https://back-mulheres-conectadas-dusky.vercel.app/participantes/presencial_top_cidades/csv",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Erro ao exportar dados");
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "top_cidades_presenciais.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  return {
    exportToCsv,
    exportInscritosPorCidade,
    exportInscritosPorSituacaoTrabalho,
    exportInscritosPorEscolaridade,
    exportInscritosPorEscolaridadeEEtnia,
    exportTopCidadesPresenciais,
  };
}
