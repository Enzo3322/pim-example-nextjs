import { useEffect, useState } from 'react';

export default function Cadastro() {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	useEffect(() => {
		console.log(name, email, password);
	}, [email, name, password]);

	const validateEmail = (email) => {
		if (email && email.includes('@') && email.includes('.com')) {
			return true;
		}
		return false;
	};

	const validateUserName = (fullName) => {
		// o split valida se o nome é composto transformando a string em array ['primeironome', 'segundo nome']
		const composeName = fullName.split(' ');
		if (fullName && composeName[1]) {
			return true;
		}
		return false;
	};

	const validatePass = (password) => {
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
		<>
			<h1>Página de cadastro</h1>
			<div>
				<input
					onChange={(e) => {
						setName(e.target.value);
					}}
					type={'text'}
					placeholder={'Nome Completo'}
				/>
				<input
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					type={'email'}
					placeholder={'exemplo@gmail.com'}
				/>
				<input
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					type={'password'}
					placeholder={'Senha'}
				/>
				<button
					onClick={() => {
						handleSubmit({ name, email, password });
					}}
				>
					Cadastrar
				</button>
			</div>
		</>
	);
}
