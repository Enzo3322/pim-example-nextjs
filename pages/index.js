import { CarsShelf } from '../components/CarsShelf';
import { cars } from '../mock/cars';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<h1>Home</h1>

			<CarsShelf carsArr={cars} title={'Populares'} />
			<CarsShelf carsArr={cars} title={'Luxosos'} />
		</div>
	);
}
