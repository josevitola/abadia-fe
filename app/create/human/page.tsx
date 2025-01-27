import styles from "@/app/page.module.css";
import { Input } from "@/components/Input";

export default async function Home() {

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Crear humano</h1>
                <Input placeholder="Nombre del humano" />
            </main>
        </div>
    );
}
