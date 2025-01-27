import styles from "@/app/page.module.css";
import { getClient } from "@/lib/apollo/client";
import { serif500 } from "@/fonts";

export default async function Home() {

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Crear humano</h1>
            </main>
        </div>
    );
}
