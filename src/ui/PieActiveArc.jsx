import { PieChart } from "@mui/x-charts/PieChart";

// Dummy data for development
const dummyData = [
  { id: 0, value: 30, label: "Used ", color: "#58B05C" },
  { id: 1, value: 45, label: "Active ", color: "#E73673" },
  { id: 2, value: 25, label: "Upcoming ", color: "#3A93EE" },
];

const dummyValueFormatter = (value) => `${value}%`;

export default function PieActiveArc({ title = "pie chart", data }) {
  return (
    <div className="pie-chart-with-title">
      <h3 className="pie-chart-title">{title}</h3>
      <PieChart
        series={[
          {
            data: data || dummyData,
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            valueFormatter: dummyValueFormatter,
            arcLabel: (item) => `${item.label}\n${item.value}%`,
            arcLabelMinAngle: 50,
          },
        ]}
        height={300}
        width={300}
      />
    </div>
  );
}
