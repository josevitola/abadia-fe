import styles from "@/app/page.module.css";
import { ServerText } from "@/components/ServerText/ServerText";

type PageProps = {
    params: Promise<{ id: string }>;
}

export default async function Home({ params }: PageProps) {
    const { id } = await params;
    return (
        <div className={styles.page}>
            <ServerText textId={id.toString()} />
        </div>
    );
}
