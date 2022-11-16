import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../style/styles'
import { StyledCalculator } from './styles'
import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

export default function Calculator() {
	const schema = yup.object().shape({
		amount: yup
			.number()
			.typeError('Digite um número')
			.required('Obrigatorio*')
			.min(1000, 'Deve ser um numero maior ou igual a 1000')
			.max(100000000, 'Deve ser um numero menor ou igual a 100000000'),
		installments: yup
			.number()
			.typeError('Digite um número')
			.required()
			.min(1, 'Deve ser um numero maior ou igual a 1')
			.max(12, 'Deve ser um numero menor ou igual a 12'),
		mdr: yup
			.number()
			.typeError('Digite um número')
			.min(0, 'Deve ser um numero maior ou igual a 0')
			.max(100, 'Deve ser um numero menor ou igual a 100'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const [days, setDays] = useState({ 1: 0, 15: 0, 30: 0, 90: 0 })
	const [apiError, setApiError] = useState(false)

	const onSubmit = (data) => {
		axios
			.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app', data)
			.then((res) => {
				setDays(res.data)
				setApiError(false)
			})
			.catch((err) => {
				console.log(err)
				setDays({ 1: 0, 15: 0, 30: 0, 90: 0 })
				setApiError(true)
			})
	}

	return (
		<Container>
			<StyledCalculator>
				<section className="inputPart">
					<h2>Simule sua Antecipação</h2>

					<form onChange={handleSubmit(onSubmit)}>
						<label>Informe o valor da venda *</label>
						<input type="number" {...register('amount', { required: true })} />
						<p className="error">{errors.amount?.message}</p>

						<label>Em quantas parcelas *</label>
						<input
							type="number"
							{...register('installments', { required: true })}
						/>
						<p className="underText">Máximo de 12 parcelas</p>
						<p className="error">{errors.installments?.message}</p>

						<label>Informe o percentual de MDR *</label>
						<input type="number" {...register('mdr', { required: true })} />
						<p className="error">{errors.mdr?.message}</p>
					</form>
				</section>
				<section className="outputPart">
					<h3>Você receberá:</h3>
					<div className="breaker"></div>
					<div>
						<p>Amanhã:</p>
						<span>
							{Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							}).format(days[1])}
						</span>
					</div>
					<div>
						<p>Em 15 dias:</p>
						<span>
							{Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							}).format(days[15])}
						</span>
					</div>
					<div>
						<p>Em 30 dias:</p>
						<span>
							{Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							}).format(days[30])}
						</span>
					</div>
					<div>
						<p>Em 90 dias:</p>
						<span>
							{Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							}).format(days[90])}
						</span>
					</div>
					{apiError ? (
						<p className="error">Ocorreu um erro no servidor!</p>
					) : (
						<></>
					)}
				</section>
			</StyledCalculator>
			<Link className="buttonLink" to="/">
				Voltar
			</Link>
		</Container>
	)
}
