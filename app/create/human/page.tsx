import pageStyles from "@/app/page.module.css";
import classes from "@/styles/sass/classes.module.scss";
import { Input } from "@/components/Input";
import { serif700 } from "@/fonts";
import { getClient } from "@/lib/apollo/client";
import { GET_COUNTRIES, GetCountriesResponse } from "./constants";
import { Select } from "@/components/Select";
import { Button } from "@/components/Button";

export default async function CreateHuman() {
    const client = getClient();

    const { data } = await client.query<GetCountriesResponse>({
        query: GET_COUNTRIES
    });

    const { countries } = data;

    const options = countries.map(({ iso31662: value, name: label }) => ({ label, value }));

    return (
        <div className={pageStyles.page}>
            <main className={pageStyles.main}>
                <h1 style={serif700.style}>Crear persona</h1>
                <form style={{ width: '60vw' }}>
                    <div className={`${classes.row}`}>
                        <Input placeholder="Nombres" />
                        <Input placeholder="Apellidos" />
                        <Input placeholder="Pseudónimo (si aplica)" />
                    </div>

                    <div className={`${classes.row}`}>
                        <Input placeholder="Año de nacimiento" />
                        <Input placeholder="Año de muerte" />
                    </div>

                    <div className={`${classes.row}`}>
                        <Select placeholder="País de origen" options={options} />
                        <Select placeholder="Segundo país (si aplica)" options={options} />
                    </div>
                    <Button>Confirmar</Button>
                </form>
            </main>
        </div>
    );
}
