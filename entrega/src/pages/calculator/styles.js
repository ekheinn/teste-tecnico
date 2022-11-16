import styled from 'styled-components'

export const StyledCalculator = styled.div`
	max-width: 600px;
	background-color: white;

	display: flex;
	justify-content: space-between;
	border: 1px solid #d1dce3;
	border-radius: 4px;

	.error {
		color: red;
		font-size: 12px;
	}

	.inputPart {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 30px 55px;
		width: 60%;

		color: #656565;
		font-size: 14px;

		input {
			border: 1px solid #dde6e9;
			border-radius: 4px;
			height: 36px;
			width: 100%;
		}
		input:focus {
			outline: 1px solid #66afe9;
		}
		form {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
		}
		label {
			margin: 5px 0 5px 0;
		}
		.underText {
			color: #cecece;
			font-size: 11px;
			margin: 5px 0 0 0;
		}
	}

	.outputPart {
		background: rgba(209, 220, 227, 0.18);
		/* max-width: 230px; */
		width: 40%;
		font-size: 16px;
		color: #5d9cec;

		h3 {
			font-size: 16px;
			margin: 16px 0 5px 0;
			text-transform: uppercase;
			font-style: italic;
			color: #3d75bb;
		}
		.breaker {
			border: 1px solid #5d9cec;
			width: 100%;
			opacity: 0.3;
		}

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 30px;

		div {
			display: flex;
			text-align: center;
			justify-content: center;
			align-items: center;
		}
		p {
			text-align: start;
			width: 90px;
		}
		span {
			font-weight: 700;
		}
	}

	@media (max-width: 600px) {
		flex-direction: column;
		align-items: center;

		.inputPart {
			h2 {
				font-size: 16px;
				width: auto;
			}
			padding: 0 15vw;
		}

		.outputPart {
			h3 {
				font-size: 16px;
			}
			p,
			span {
				font-size: 13px;
			}
			width: 100%;
			padding: 0;
			display: flex;
			align-items: center;
		}
	}
`
