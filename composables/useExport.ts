export function useExport() {
  async function exportToCsv() {
    const response = await fetch(
      "https://back-mulheres-conectadas.vercel.app/participantes/exportar_inscricoes",
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
      "https://back-mulheres-conectadas.vercel.app/participantes/exportar_inscricoes_por_cidade",
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
      "https://back-mulheres-conectadas.vercel.app/participantes/exportar_inscricoes_por_situacao_trabalho",
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
      "https://back-mulheres-conectadas.vercel.app/participantes/exportar_inscricoes_por_escolaridade",
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
      "https://back-mulheres-conectadas.vercel.app/participantes/exportar_inscricoes_por_etnia",
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
      "https://back-mulheres-conectadas.vercel.app/participantes/exportar_top_cidades_presenciais",
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
