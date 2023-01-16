import { useState, useEffect } from "react"

export default function useFetch({ url, options }) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetch(url, options)
				const json = await data.json()
				setData(json)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [url, options])

	return {
		data,
		error,
		loading,
	}
}
