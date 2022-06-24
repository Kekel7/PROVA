import Title from './App.css';


function App() {
	

	const processo =[
		{
			nome: "Processos",
			coment: "Processos Relacionados ao combate do COVID 19", 
		}

	]

	return (
		<div>
			<Title />
			
			{processo.map ((Processos) =>{
				return <Perfil 

							nome={Processos.nome} 
							coment={Processos.coment}/>
			})}

		</div>
	);
}

export default App.css;
