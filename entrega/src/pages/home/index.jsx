import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../style/styles'
import '../../style/body.css'

function Home() {
	return (
		<Container>
			<h1>Bem-vindo!</h1>
			<Link className="buttonLink" to="/calculator">
				Clique aqui
			</Link>
		</Container>
	)
}

export default Home
