import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from '../styles/commons.module.scss';

export default function Cadastro() {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	useEffect(() => {
		console.log(name, email, password);
	}, [email, name, password]);

	const validateEmail = (email) => {
		// valida se o email possui @ e .com
		if (email && email.includes('@') && email.includes('.com')) {
			return true;
		}
		return false;
	};

	const validateUserName = (fullName) => {
		// o split valida se o nome é composto transformando a string em array ['primeironome', 'segundo nome']
		if (fullName) {
			const composeName = fullName.split(' ');
			if (fullName && composeName[1]) {
				return true;
			}
		}
		return false;
	};

	const validatePass = (password) => {
		// valida se foi inserido um password e se possui 6 ou mais caracteres
		if (password && password.length >= 6) {
			return true;
		}
		return false;
	};

	const handleSubmit = ({ name, email, password }) => {
		const validEmail = validateEmail(email);
		const validUserName = validateUserName(name);
		const validPassword = validatePass(password);

		if (validEmail && validUserName && validPassword) {
			return alert('Cadastro pode ser enviado');
		}
		return alert('dados invalidos');
	};

	return (
		<div className={styles.main}>
			<div className={styles.formContainer}>
				<div>
					<h1>Cadastro</h1>
				</div>
				<TextField
					onChange={(e) => {
						setName(e.target.value);
					}}
					label="Nome completo"
					variant="outlined"
				/>
				<TextField
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					label="Email"
					variant="outlined"
				/>
				<TextField
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					label="Senha"
					variant="outlined"
				/>

				<Button
					onClick={() => {
						handleSubmit({ name, email, password });
					}}
					variant="contained"
					size="large"
				>
					ENVIAR
				</Button>
			</div>
		</div>
	);
}
