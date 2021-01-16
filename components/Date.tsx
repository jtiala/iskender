import { format } from "date-fns";

interface Props {
  date: string;
}

const DateComponent: React.FC<Props> = ({ date }) => {
  return <time dateTime={date}>{format(new Date(date), "dd.MM.yyyy")}</time>;
};

export default DateComponent;
