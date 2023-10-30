import { useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventsDetailPage = () => {
	const data = useLoaderData();
	return <EventItem event={data.event} />;
};

export default EventsDetailPage;
export async function loader({ request, params }) {
	params.eventId;
	const response = await fetch("http://localhost:8800/events/" + id);

	if (!response.ok) {
		throw json(
			{ message: "Could not fetch details for selected event." },
			{ status: 500 }
		);
	} else {
		return response;
	}
}
