import { FC, useMemo, useState } from "react";
import { useInterval } from "../../../../../hooks/useInterval.ts";

export const CurrentDate: FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useInterval(() => setCurrentDate(new Date()));

  const date = useMemo(() => {
    return new Intl.DateTimeFormat(navigator.language, {
      hour: "numeric",
      weekday: "short",
      minute: "numeric",
    }).format(currentDate);
  }, [currentDate]);

  return <span className={"ml-2 text-orange-50 sm:text-sm"}>{date}</span>;
};
