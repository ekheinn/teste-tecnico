import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Calculator from '../pages/calculator'
import { PageError } from '../pages/error'
import Home from '../pages/home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <PageError />,
	},
	{
		path: '/calculator',
		element: <Calculator />,
	},
])

export default router
