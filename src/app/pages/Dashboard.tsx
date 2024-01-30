import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useApp } from "~hooks/app";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const income = [6000, 6000, 6000, 6000, 6000, 6000, 6000, 6500, 6500, 6500, 7000, 7000];
const outcome = [5400, 5590, 6105, 6000, 6738, 6230, 5950, 5980, 5500, 6100, 6200, 6300];
const investments = [200, 200, 200, 200, 200, 200, 200, 200, 250, 250, 250, 250];
const xLabels = new Array(12).fill(0).map((_, i) => dayjs().subtract((11 - i), "month").format("MMM/YY"));

const barData = [4000, 3000, 2890, 1500];
const barLabels = [
  "Alimentação",
  "Educação",
  "Lazer",
  "Moradia",
];

export const Dashboard = () => {
  const { setTitle } = useApp();

  useEffect(() => {
    setTitle("Dashboard");
  });

  return (
    <Stack gap={2} className="p-4 h-full relative">
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Orçamento semanal mercado
          </Typography>
          <BorderLinearProgress variant="determinate" value={64} />
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              R$ 128,36 (64%)
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              R$ 200,00
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Receita x Despesa (12 meses)
          </Typography>
          <LineChart
            height={200}
            series={[
              { data: outcome, label: 'Despesas', showMark: false, color: '#f44336' },
              { data: income, label: 'Receitas', showMark: false, color: '#4caf50' },
              { data: investments, label: 'Investimentos', showMark: false, color: '#2196f3' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            slotProps={{
              legend: {
                labelStyle: { fontSize: 12 },
              },
            }}
            sx={{
              '.MuiChartsLegend-mark': {
                width: 10,
                height: 10,
                y: -5,
                borderRadius: 5,
              },
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Categorias (jan/24)
          </Typography>
          <BarChart
            height={200}
            series={[
              { data: barData, label: 'Despesas', color: '#f44336' },
            ]}
            xAxis={[{ scaleType: 'band', data: barLabels }]}
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
            sx={{
              '.MuiChartsLegend-mark': {
                width: 10,
                height: 10,
                y: -5,
                borderRadius: 5,
              },
            }}
          />
        </CardContent>
      </Card>
    </Stack>
  )
}
