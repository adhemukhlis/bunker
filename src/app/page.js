import LockedPanel from '@/clientApp/LockedPanel'
import styles from './page.module.css'
export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Bunker</h1>
			<LockedPanel />
		</main>
	)
}
