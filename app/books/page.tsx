import styles from "@/app/page.module.css";
import { ServerBookList } from "@/components/ServerBookList/ServerBookList";

export default async function Home() {
    return (
        <div className={styles.page}>
            <h1>Book list</h1>
            <ServerBookList />
        </div>
    );
}
