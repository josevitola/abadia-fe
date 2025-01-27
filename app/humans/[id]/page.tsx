import styles from "@/app/page.module.css";
import { GET_HUMAN_DETAIL, GetHumanDetailResponse } from "./constants";
import { getClient } from "@/lib/apollo/client";
import { serif500 } from "@/fonts";

type PageProps = {
    params: Promise<{ id: string }>;
}

export default async function Home({ params }: PageProps) {
    const { id } = await params;
    const client = getClient();

    const { data } = await client.query<GetHumanDetailResponse>({
        query: GET_HUMAN_DETAIL,
        variables: { id }
    });

    const { human } = data;

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 style={serif500.style}>{human.name}</h1>
                <h3>({human.birthyear || 'desconocido'}-{human.deathyear})</h3>
                <div>
                    <span>nacido en <strong>{human.country1.name}</strong></span>
                </div>

                <h3>Textos:</h3>
                <ul>
                    {(human.texts.map(({ id, title }) => <li key={id}><a href={`/texts/${id}`}>{title}</a></li>))}
                </ul>
            </main>
        </div>
    );
}
