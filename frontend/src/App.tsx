import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home.";
import EditEventPage from "./pages/EditEvent";
import EventsPage from "./pages/Events";
import EventsDetailPage from "./pages/EventsDetail";
import NewEventPage from "./pages/NewEvent";
import EventsRootLayout from "./pages/EventsRoot";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "events",
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: async () => {
							const response = await fetch("http://localhost:8080/events");
							if (!response.ok) {
								// ....
							} else {
								const resData = await response.json();
								return resData.events;
							}
						},
					},
					{ path: ":eventId", element: <EventsDetailPage /> },
					{ path: "new", element: <NewEventPage /> },
					{ path: ":eventId/edit", element: <EditEventPage /> },
				],
			},
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
