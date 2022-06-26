import classes from "./SideBar.module.css";

interface Props {}

const JOKES = [
  "Smoking Joke",
  "My Boss Joke",
  "Dirty Millionaire Joke",
  "The annoying neighbour",
  "Knock Knock",
  "Why Tyson lisps",
  "The drunk Police officer",
  "My hip dad (Dad joke)",
  "What not to day in an elevator",
  "Lorem ipsum dolor sit, amet",
];

const SideBar: React.FC<Props> = () => {
  return (
    <div className={classes.sidebar}>
      <h4 className={classes.title}>The Top 10 jokes in this week</h4>
      <ul>
        {JOKES.map((j: string) => (
          <li key={j} className={classes.item}>
            <button>{j}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
