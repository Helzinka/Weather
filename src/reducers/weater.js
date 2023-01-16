import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	value: { current: null, forecast: null },
}

export const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		initCurrentWeather: (state, action) => {
			state.value.current = action.payload
		},
		initForecastWeather: (state, action) => {
			state.value.forecast = action.payload
		},
	},
})

export const { initCurrentWeather, initForecastWeather } = weatherSlice.actions
export default weatherSlice.reducer
