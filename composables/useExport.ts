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
    console.log(response);
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

  return {
    exportToCsv,
  };
}
