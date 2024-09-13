import { january } from "../../../observanceDaysData/january";
import { february } from "../../../observanceDaysData/february";
import { march } from "../../../observanceDaysData/march";
import { april } from "../../../observanceDaysData/april";
import { may } from "../../../observanceDaysData/may";
import { june } from "../../../observanceDaysData/june";
import { july } from "../../../observanceDaysData/july";
import { august } from "../../../observanceDaysData/august";
import { september } from "../../../observanceDaysData/september";
import { october } from "../../../observanceDaysData/october";
import { november } from "../../../observanceDaysData/november";
import { december } from "../../../observanceDaysData/december";

export const GET = ({ params, request }) => {
  const month = params.month;
  let monthData;
  switch (month) {
    case "january":
      monthData = january
      break;
    case "february":
      monthData = february
      break;
    case "march":
      monthData = march
      break;
    case "april":
      monthData = april
      break;
    case "may":
      monthData = may
      break;
    case "june":
      monthData = june
      break;
    case "july":
      monthData = july
      break;
    case "august":
      monthData = august
      break;
    case "september":
      monthData = september
      break;
    case "october":
      monthData = october
      break;
    case "november":
      monthData = november
      break;
    case "december":
      monthData = december
      break;
  }
  return new Response(
    JSON.stringify(monthData),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}

export function getStaticPaths() {
  return [
    { params: { month: "january" } },
    { params: { month: "february" } },
    { params: { month: "march" } },
    { params: { month: "april" } },
    { params: { month: "may" } },
    { params: { month: "june" } },
    { params: { month: "july" } },
    { params: { month: "august" } },
    { params: { month: "september" } },
    { params: { month: "october" } },
    { params: { month: "november" } },
    { params: { month: "december" } },
  ]
}