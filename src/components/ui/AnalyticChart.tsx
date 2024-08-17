import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AnalyticsChart = ({
  data,
}: {
  data: { name: string; value: number }[];
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#16a34a" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AnalyticsChart;
