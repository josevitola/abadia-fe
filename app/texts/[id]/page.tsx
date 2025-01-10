import styles from "@/app/page.module.css";
import { ClientText } from "@/components/ClientText/ClientText";

type PageProps = {
    params: { id: string };
}

export default async function Home({ params }: PageProps) {
    const { id } = await params;
    return (
        <div className={styles.page}>
            <ClientText textId={id.toString()} />
        </div>
    );
}
