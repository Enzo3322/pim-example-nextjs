import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';
import ModalCar from './ModalCar';
import 'swiper/css';
import 'swiper/css/pagination';
import useDevice from '../../hooks/useDevice';

export const CarsShelf = ({ carsArr, title }) => {
	const [open, setOpen] = useState(false);
	const [selectedCar, setSelectedCar] = useState(null);

	const handleClick = (car) => {
		setSelectedCar(car);
		setOpen(true);
	};
	const { isMobile } = useDevice();
	return (
		<div className={styles.containerShelf}>
			<h1 className={styles.shelfTitle}>{title}</h1>
			<Swiper
				className={styles.swiperContainer}
				slidesPerView={isMobile ? 1 : 4}
				spaceBetween={30}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={true}
				modules={[Pagination, Autoplay]}
			>
				{carsArr.map((car, i) => (
					<SwiperSlide key={i}>
						<div className={styles.swiperContent}>
							<picture>
								<img src={car.imgVeiculo} alt={car.nome} />
							</picture>
							<h2>{car.nome}</h2>
							<p>{car.info}</p>
							<Button
								variant="contained"
								size="large"
								onClick={() => {
									handleClick(car);
								}}
							>
								Alugar
							</Button>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<ModalCar car={selectedCar} setOpen={setOpen} open={open} />
		</div>
	);
};
