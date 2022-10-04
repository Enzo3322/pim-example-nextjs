import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90%',
	bgcolor: 'white',
	borderRadius: '8px',
	p: 4,
};

export default function ModalCar({ setOpen, open, car }) {
	const handleClose = () => {
		setOpen(false);
	};

	if (!car) return null;

	return (
		<div>
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Marca: {car.marca}
					</Typography>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Modelo: {car.nome}
					</Typography>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Ar condicionado: {car.arCondicionado ? 'Sim' : 'Não'}
					</Typography>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Blindado: {car.blindado ? 'Sim' : 'Não'}
					</Typography>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Lugares: {car.lugares}
					</Typography>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{car.portas} portas
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}
