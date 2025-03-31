import { useState, useEffect, useContext, useMemo } from "react";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/vela-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { RegistrationContext } from "../RegistrationContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./MultiEventSelect.css";
// ---------------------------
// Data Definitions
// ---------------------------
export interface EventOption {
	label: string;
	price: number | string;
	group: string; // "Pass", "Tech", "Non-Tech", or "SE"
}

export interface EventGroup {
	label: string;
	code: string;
	items: EventOption[];
}

// ---------------------------
// Fetch Data from Firestore and Group
// ---------------------------
interface MultiEventSelectProps {
	setFullAmount: React.Dispatch<React.SetStateAction<number>>;
}

export default function MultiEventSelect({
	setFullAmount,
}: MultiEventSelectProps) {
	const {
		selectedPass,
		selectedIndividualEventTitles,
		updatePass,
		updateIndividualEvents,
	} = useContext(RegistrationContext);

	const [groupedEvents, setGroupedEvents] = useState<EventGroup[]>([]);

	useEffect(() => {
		const fetchEvents = async () => {
			const querySnapshot = await getDocs(collection(db, "Samhita25"));
			const events: EventOption[] = querySnapshot.docs.map((doc) => {
				const eventType: string = doc.data().eventType;
				// Use explicit equality checks to differentiate Technical vs Non-Technical
				const group =
					eventType === "Technical"
						? "Tech"
						: eventType === "Non-Technical"
						? "Non-Tech"
						: "SE";
				return {
					label: doc.data().eventName,
					price: Number(doc.data().price),
					group,
				};
			});

			const grouped: EventGroup[] = [
				{
					label: "Passes",
					code: "Pass",
					items: [
						{ label: "Global Pass", price: 100, group: "Pass" },
						{ label: "Tech Pass", price: 80, group: "Pass" },
						{ label: "Non-Tech Pass", price: 90, group: "Pass" },
					],
				},
				{
					label: "Technical",
					code: "Tech",
					items: events.filter((e) => e.group === "Tech"),
				},
				{
					label: "Non-Technical",
					code: "Non-Tech",
					items: events.filter((e) => e.group === "Non-Tech"),
				},
				{
					label: "Signature Events",
					code: "SE",
					items: events.filter((e) => e.group === "SE"),
				},
			];

			setGroupedEvents(grouped);
		};

		fetchEvents();
	}, []);

	// Derived data from groupedEvents
	const passOptions: EventOption[] =
		groupedEvents.find((g) => g.code === "Pass")?.items || [];
	const allIndividualEvents: EventOption[] = groupedEvents
		.filter((g) => g.code !== "Pass")
		.flatMap((group) => group.items);

	// ---------------------------
	// Helper Functions
	// ---------------------------
	function getForcedEvents(activePass: string | null): EventOption[] {
		if (!activePass) return [];
		let forced: EventOption[] = [];
		if (activePass === "TECH") {
			forced = allIndividualEvents.filter((ev) => ev.group === "Tech");
		} else if (activePass === "GLOBAL") {
			forced = allIndividualEvents.filter(
				(ev) => ev.group === "Tech" || ev.group === "Non-Tech"
			);
		} else if (activePass === "NON-TECH") {
			forced = allIndividualEvents.filter(
				(ev) => ev.group === "Non-Tech"
			);
		}
		const passName =
			activePass === "TECH"
				? "Tech Pass"
				: activePass === "GLOBAL"
				? "Global Pass"
				: activePass === "NON-TECH"
				? "Non-Tech Pass"
				: "";
		return forced.map((ev) => ({ ...ev, price: passName }));
	}

	function getAllowedIndividualEvents(
		activePass: string | null
	): EventOption[] {
		if (!activePass) return allIndividualEvents;
		if (activePass === "TECH") {
			return allIndividualEvents.filter((ev) => ev.group !== "Tech");
		} else if (activePass === "GLOBAL") {
			return allIndividualEvents.filter(
				(ev) => ev.group !== "Tech" && ev.group !== "Non-Tech"
			);
		} else if (activePass === "NON-TECH") {
			return allIndividualEvents.filter((ev) => ev.group !== "Non-Tech");
		}
		return allIndividualEvents;
	}

	function buildGroupedOptions(activePass: string | null): EventGroup[] {
		const allowedIndividualGroups = groupedEvents
			.filter((g) => g.code !== "Pass")
			.map((g) => {
				let items = g.items;
				if (activePass === "TECH" && g.code === "Tech") items = [];
				if (
					activePass === "GLOBAL" &&
					(g.code === "Tech" || g.code === "Non-Tech")
				)
					items = [];
				if (activePass === "NON-TECH" && g.code === "Non-Tech")
					items = [];
				return { ...g, items };
			});
		return [
			{ label: "Passes", code: "Pass", items: passOptions },
			...allowedIndividualGroups,
		];
	}

	function computeMultiSelectValue(
		activePass: string | null,
		individualTitles: string[]
	): EventOption[] {
		const values: EventOption[] = [];
		if (activePass) {
			const passItem = passOptions.find((p) => {
				if (activePass === "GLOBAL" && p.label.includes("Global"))
					return true;
				if (
					activePass === "TECH" &&
					p.label.includes("Tech") &&
					!p.label.includes("Non-Tech")
				)
					return true;
				if (activePass === "NON-TECH" && p.label.includes("Non-Tech"))
					return true;
				return false;
			});
			if (passItem) values.push(passItem);
		}
		const allowed = getAllowedIndividualEvents(activePass);
		const individual = allowed.filter((ev) =>
			individualTitles.includes(ev.label)
		);
		return [...values, ...individual];
	}

	type ComputedRow = {
		label: string;
		price: number | string;
	};

	function computeDataTableRows(
		activePass: string | null,
		individualTitles: string[]
	): ComputedRow[] {
		const rows: ComputedRow[] = [];
		if (activePass) {
			const passItem = passOptions.find((p) => {
				if (activePass === "GLOBAL" && p.label.includes("Global"))
					return true;
				if (
					activePass === "TECH" &&
					p.label.includes("Tech") &&
					!p.label.includes("Non-Tech")
				)
					return true;
				if (activePass === "NON-TECH" && p.label.includes("Non-Tech"))
					return true;
				return false;
			});
			if (passItem)
				rows.push({ label: passItem.label, price: passItem.price });
			const forced = getForcedEvents(activePass);
			forced.forEach((ev) =>
				rows.push({ label: ev.label, price: ev.price })
			);
		}
		const allowed = getAllowedIndividualEvents(activePass);
		allowed
			.filter((ev) => individualTitles.includes(ev.label))
			.forEach((ev) => rows.push({ label: ev.label, price: ev.price }));
		return rows;
	}

	function computeTotalPrice(
		activePass: string | null,
		individualTitles: string[]
	): number {
		let total = 0;
		if (activePass) {
			const passItem = passOptions.find((p) => {
				if (activePass === "GLOBAL" && p.label.includes("Global"))
					return true;
				if (
					activePass === "TECH" &&
					p.label.includes("Tech") &&
					!p.label.includes("Non-Tech")
				)
					return true;
				if (activePass === "NON-TECH" && p.label.includes("Non-Tech"))
					return true;
				return false;
			});
			if (passItem) total += Number(passItem.price);
		}
		const allowed = getAllowedIndividualEvents(activePass);
		allowed
			.filter((ev) => individualTitles.includes(ev.label))
			.forEach((ev) => {
				total += typeof ev.price === "number" ? ev.price : 0;
			});

		setFullAmount(total);
		return total;
	}

	// ---------------------------
	// Shared state: ensure individual selections are an array.
	const individualTitles: string[] = Array.isArray(
		selectedIndividualEventTitles
	)
		? selectedIndividualEventTitles
		: Object.keys(selectedIndividualEventTitles);

	const multiSelectValue = useMemo(
		() => computeMultiSelectValue(selectedPass, individualTitles),
		[selectedPass, individualTitles]
	);
	const groupedOptions = buildGroupedOptions(selectedPass);
	const dataTableRows = useMemo(
		() => computeDataTableRows(selectedPass, individualTitles),
		[selectedPass, individualTitles]
	);
	const totalPrice = useMemo(
		() => computeTotalPrice(selectedPass, individualTitles),
		[selectedPass, individualTitles]
	);

	const onMultiSelectChange = (e: MultiSelectChangeEvent) => {
		const newValue = e.value as EventOption[];
		let newPass: string | null = null;
		const newIndividual: string[] = [];
		newValue.forEach((item) => {
			if (item.group === "Pass") {
				if (item.label.includes("Global")) newPass = "GLOBAL";
				else if (
					item.label.includes("Tech") &&
					!item.label.includes("Non-Tech")
				)
					newPass = "TECH";
				else if (item.label.includes("Non-Tech")) newPass = "NON-TECH";
			} else {
				newIndividual.push(item.label);
			}
		});
		updatePass(newPass);
		const allowed = getAllowedIndividualEvents(newPass).map(
			(ev) => ev.label
		);
		const filteredIndividual = newIndividual.filter((label) =>
			allowed.includes(label)
		);
		updateIndividualEvents(filteredIndividual);
	};

	return (
		<div className="right-side">
			<div className="input-label">Select Events</div>
			<MultiSelect
				value={multiSelectValue}
				options={groupedOptions}
				onChange={onMultiSelectChange}
				optionLabel="label"
				optionGroupLabel="label"
				optionGroupChildren="items"
				display="chip"
				filter
				placeholder="Select Events"
			/>
			<DataTable value={dataTableRows} className="multi-select">
				<Column field="label" header="Name" />
				<Column field="price" header="Price" />
			</DataTable>
			<div className="total-price">Total Price: {totalPrice}</div>
		</div>
	);
}
