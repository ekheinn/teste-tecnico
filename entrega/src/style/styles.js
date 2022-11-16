import styled from 'styled-components'

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	height: 100vh;

	text-align: center;
	font-family: 'Source Sans Pro', sans-serif;
	background-color: #f5f7fa;

	h2 {
		width: 250px;
	}
	img {
		width: 700px;
		height: 200px;
		border: red 10px solid;
		border-radius: 10px;
	}

	.buttonLink {
		background: white;
		color: black;
		padding: 10px;
		border: 1px solid #d1dce3;
		border-radius: 10px;
		text-decoration: none;
		color: #5d9cec;

		:hover {
			filter: brightness(0.8);
		}
	}
`
