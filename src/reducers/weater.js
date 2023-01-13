import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	value: {},
}

export const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		initWeather: (state, action) => {
			state.value = action.payload
		},
	},
})

export const { initWeather } = weatherSlice.actions
export default weatherSlice.reducer
