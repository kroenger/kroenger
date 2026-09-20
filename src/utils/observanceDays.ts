import { january } from "../observanceDaysData/january";
import { february } from "../observanceDaysData/february";
import { march } from "../observanceDaysData/march";
import { april } from "../observanceDaysData/april";
import { may } from "../observanceDaysData/may";
import { june } from "../observanceDaysData/june";
import { july } from "../observanceDaysData/july";
import { august } from "../observanceDaysData/august";
import { september } from "../observanceDaysData/september";
import { october } from "../observanceDaysData/october";
import { november } from "../observanceDaysData/november";
import { december } from "../observanceDaysData/december";

export interface ObservanceDayLink {
  label: string;
  value: string;
}

export interface ObservanceDay {
  date: string;
  day: string;
  description: string;
  links?: ObservanceDayLink[];
}

export interface MonthData {
  /** Display name, e.g. "January" */
  name: string;
  /** URL slug, e.g. "january" */
  slug: string;
  /** 0-based month index (January = 0) */
  index: number;
  /** Observance days for this month */
  days: ObservanceDay[];
}

export const months: MonthData[] = [
  { name: "January", slug: "january", index: 0, days: january },
  { name: "February", slug: "february", index: 1, days: february },
  { name: "March", slug: "march", index: 2, days: march },
  { name: "April", slug: "april", index: 3, days: april },
  { name: "May", slug: "may", index: 4, days: may },
  { name: "June", slug: "june", index: 5, days: june },
  { name: "July", slug: "july", index: 6, days: july },
  { name: "August", slug: "august", index: 7, days: august },
  { name: "September", slug: "september", index: 8, days: september },
  { name: "October", slug: "october", index: 9, days: october },
  { name: "November", slug: "november", index: 10, days: november },
  { name: "December", slug: "december", index: 11, days: december },
];

/** All observance days across every month, in calendar order. */
export const allObservanceDays: ObservanceDay[] = months.flatMap((m) => m.days);

/** Build the URL id used by /observance-days/[id] for a given day. */
export const getObservanceDayId = (day: ObservanceDay): string => {
  const dayId = day.day.trim().toLowerCase().split(" ").join("-");
  const dateId = day.date.split(" ").join("-").toLowerCase();
  return `${dayId}-${dateId}`;
};

/** Get a month by its slug (case-insensitive). */
export const getMonthBySlug = (slug: string): MonthData | undefined =>
  months.find((m) => m.slug === slug.toLowerCase());

/** Get a month by its 0-based index. */
export const getMonthByIndex = (index: number): MonthData | undefined =>
  months.find((m) => m.index === index);

/** The month matching the current date. */
export const getCurrentMonth = (date: Date = new Date()): MonthData =>
  months[date.getMonth()];

/** Previous month, wrapping around the year. */
export const getPreviousMonth = (month: MonthData): MonthData =>
  months[(month.index + 11) % 12];

/** Next month, wrapping around the year. */
export const getNextMonth = (month: MonthData): MonthData =>
  months[(month.index + 1) % 12];