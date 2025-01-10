import styles from "@/app/page.module.css";
import { ClientText } from "@/components/ServerText/ServerText";

type PageProps = {
    params: Promise<{ id: string }>;
}

export default async function Home({ params }: PageProps) {
    const { id } = await params;
    return (
        <div className={styles.page}>
            <ClientText textId={id.toString()} />
        </div>
    );
}
