import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function Reservation() {
	const [selectedDate, setSelectedDate] = useState(null)

	return (
		<div>
			<h3>Seleccione una fecha:</h3>
			<DatePicker
				selected={selectedDate}
				onChange={(date) => setSelectedDate(date)}
				minDate={new Date()}
			/>
		</div>
	)
}

export default Reservation
