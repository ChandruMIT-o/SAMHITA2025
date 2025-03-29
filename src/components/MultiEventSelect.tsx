import { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

// Use PrimeReact's built-in dark theme
import "primereact/resources/themes/vela-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

interface EventOption {
	label: string;
	price: number;
}

interface EventType {
	label: string;
	code: string;
	items: EventOption[];
}

const groupedEvents: EventType[] = [
	{
		label: "Technical",
		code: "Tech",
		items: [
			{ label: "Coding Quest", price: 100 },
			{ label: "Street Coding", price: 80 },
			{ label: "Ninja Coding", price: 90 },
			{ label: "AI Impromptu", price: 110 },
			{ label: "Call of Query", price: 95 },
			{ label: "Tournament of Strategies", price: 120 },
			{ label: "Reverse Coding", price: 85 },
			{ label: "Squid Games", price: 130 },
		],
	},
	{
		label: "Non-Technical",
		code: "Non-Tech",
		items: [
			{ label: "Treasure Hunt", price: 70 },
			{ label: "IPL Auction", price: 75 },
			{ label: "Fandom Quiz", price: 65 },
			{ label: "Connections", price: 60 },
			{ label: "ADZAP", price: 50 },
			{ label: "Escape Room", price: 85 },
		],
	},
	{
		label: "Signature Events",
		code: "SE",
		items: [
			{ label: "Hackathon", price: 150 },
			{ label: "Paper Presentation", price: 140 },
		],
	},
];

export default function MultiEventSelect() {
	// Since our options no longer have a "value" property,
	// the entire object is returned when selected.
	const [selectedEvents, setSelectedEvents] = useState<EventOption[]>([]);

	return (
		<div
			style={{
				width: "650px",
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				alignItems: "flex-start",
			}}
		>
			<div className="input-label">Select Events</div>
			<MultiSelect
				value={selectedEvents}
				options={groupedEvents}
				onChange={(e: MultiSelectChangeEvent) =>
					setSelectedEvents(e.value)
				}
				optionLabel="label"
				optionGroupLabel="label"
				optionGroupChildren="items"
				display="chip"
				filter
				placeholder="Select Events"
				style={{ width: "650px", height: "50px" }} // Fixed width and height
			/>

			<DataTable
				value={selectedEvents}
				style={{
					width: "650px",
				}}
			>
				<Column field="label" header="Event" />
				<Column field="price" header="Price" />
			</DataTable>
		</div>
	);
}
