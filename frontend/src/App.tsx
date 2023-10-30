import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home.";
import EditEventPage from "./pages/EditEvent";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsDetailPage, {
	loader as eventDetailLoader,
} from "./pages/EventsDetail";
import NewEventPage from "./pages/NewEvent";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "events",
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{
						path: ':eventId',
						id: 'event-detail',
						loader:eventDetailLoader,
						children: [
							{
								index:true,
								element: <EventsDetailPage />,
							},
							{ path: "edit", element: <EditEventPage /> },
						]
					},

					{ path: "new", element: <NewEventPage /> },
				
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
