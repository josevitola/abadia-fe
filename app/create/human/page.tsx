import styles from "@/app/page.module.css";
import { Input } from "@/components/Input";
import { serif700 } from "@/fonts";
import { getClient } from "@/lib/apollo/client";
import { GET_COUNTRIES, GetCountriesResponse } from "./constants";
import { Select } from "@/components/Select";

export default async function CreateHuman() {
    const client = getClient();

    const { data } = await client.query<GetCountriesResponse>({
        query: GET_COUNTRIES
    });

    const { countries } = data;

    const options = countries.map(({ iso31662: value, name: label }) => ({ label, value }));

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 style={serif700.style}>Crear humano</h1>
                <form>
                    <Input placeholder="Nombre del humano" />
                    <Select options={options} />
                </form>
            </main>
        </div>
    );
}
