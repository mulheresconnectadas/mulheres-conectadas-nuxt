export function useAddress() {
  const cities = ref<{ value: number; label: string }[]>([]);

  const getCities = async () => {
    const response = await fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados/27/municipios"
    );
    const data = await response.json();
    data.map((city: { id: number; nome: string }) => {
      cities.value.push({
        value: city.id,
        label: city.nome,
      });
    });
  };

  onMounted(async () => {
    await getCities();
  });

  return {
    cities,
    getCities,
  };
}
