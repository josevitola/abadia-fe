import styles from "@/app/page.module.css";
import { ServerBookList } from "@/components/ServerBookList/ServerBookList";

export default async function Home() {
    return (
        <div className={styles.page}>
            lalala?
            <ServerBookList />
        </div>
    );
}
