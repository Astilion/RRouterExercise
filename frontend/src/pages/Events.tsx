import {Link} from 'react-router-dom'

const Dummy_EVENTS = [
	{
		id: "e1",
		title: "Some Title",
	},
	{
		id: "e2",
		title: "Another Title",
	},
];
const EventsPage = () => {
	return (<>
    <h1>Events</h1>
    <ul>
        {Dummy_EVENTS.map(event => <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
        </li>)}
    </ul>
    </>);
};

export default EventsPage;
