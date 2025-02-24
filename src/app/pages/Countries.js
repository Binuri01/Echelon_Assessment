import { fetchCountries } from "../../utils/FetchCountries";
import CountriesList from "../../components/CountriesList";

export default async function CountriesPage() {
  const countries = await fetchCountries();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Countries Using USD</h1>
      <CountriesList countries={countries} />
    </div>
  );
}
