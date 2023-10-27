import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";


function EventsPage() {
	const data = useLoaderData();
	const events = data.events
	return (
		<>
			<EventsList events={events} />
		</>
	);
}

export default EventsPage;
export async function loader() {
	const response = await fetch("http://localhost:8080/events");
	if (!response.ok) {
		// return {isError: true, message: 'Could not fetch events.'};
		// throw { message: 'Could not fetch data event.'}
	} else {
		const resData = await response.json();
		return resData;
		
	}
}
