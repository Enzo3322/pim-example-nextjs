## Como criar uma nova página

### Ex: Criando página de cadastro

<code>
<!-- pages/cadastro.js -->
	export default function Cadastro(){

    	return (
    		<>
    			<h1>Página de cadastro</h1>
    		</>
    	)
    }

</code>

Com o código acima já será possivel visualizar a nova pagina em http://localhost:3000/cadastro

Para a criação de uma nova página é necessário criar um arquivo dentro de pages/

Sempre que criar umna nova página a função deve ser exportada por padrão no arquivo criado

### Ex: Criando componente de formulário da página de cadastro

<code>
	export const SingUpForm = () => {

    	return (
    		<>
    			<input type={'text'} placeholder={'Nome Completo'}/>
    			<input type={'email'} placeholder={'exemplo@gmail.com'}/>
    			<input type={'password'} placeholder={'Senha'}/>
    			<button onClick={() => {}}>Cadastrar</button>
    		</>
    	)
    }

</code>

### O resultado da nossa página de cadastro será esse

<code>
import { SingUpForm } from "../components/SingUpForm";

export default function Cadastro(){
return (
<>
<h1>Página de cadastro</h1>
<SingUpForm/>
</>
)
}
</code>

## Como estilizar a minha página?

O next é baseado em estilização por módulos.
O que seria estilização por módulos?

Basicamente a estilização por módulos é um padrão adota por aplicações modulares ajudando no desenvolvimento
das páginas e isolando o css

Um exemplo para deixar mais claro:

Vamos supor que você crie uma estilização para a classe ".container" e em outra página também tenha uma classe .container.

Com a estilização em módulos ele vai receber a classe container, e fazer com que ela seja única, mesmo com a nomeclatura no
código sendo a mesma.

<!-- home -->
<div class='container'>  => interpretação do css module =>  <div class='styles_container__cCpq9'> 
<!-- cadastro -->
<div class='container'>  => interpretação do css module =>  <div class='styles_container__rQve8'>

### Aplicando css module na prática

<!-- estilizando a home -->
<code>
	import styles from '../styles/Home.module.css';

    export default function Home() {
    return (
    	<div className={styles.container}>
    		<h1>Home</h1>
    	</div>
    );

}
</code>

#### As classes criadas dentro do arquivo Home.module.css devem ser acessadas como um objeto

Ou seja para acessar a classe container que foi estilizada no arquivo css, precisamos importar styles
e acessar a classe como uma propriedade

<!-- arquivo styles/Home.module.css -->
<code> 
	.container {
		background: #fff
	}
</code>
