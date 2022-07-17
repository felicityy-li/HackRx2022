import ProfileIcon from "../components/ProfileIcon";

const data = [
  {
    imageSrc: "https://reactjs.org/logo-og.png",
    name: "Bob Builder",
    age: "3",
  },
  {
    imageSrc: "https://thumbs.dreamstime.com/b/smiling-grandmother-96155.jpg",
    name: "Doris Exploring",
    age: "73",
  },
  {
    imageSrc: "https://thumbs.dreamstime.com/b/smiling-grandmother-96155.jpg",
    name: "Doris Exploring",
    age: "73",
  },
  {
    imageSrc: "https://thumbs.dreamstime.com/b/smiling-grandmother-96155.jpg",
    name: "Doris Exploring",
    age: "73",
  },
  {
    imageSrc: "https://thumbs.dreamstime.com/b/smiling-grandmother-96155.jpg",
    name: "Doris Exploring",
    age: "73",
  },
];

export default function DashboardFeature() {
  return (
    <div>
      {data.map((person) => {
        return (
          <div style={{ height: "60px", display: 'flex',  flexDirection: 'row', flexWrap: 'wrap'}}>
            <ProfileIcon
              imageSrc={person.imageSrc}
              name={person.name}
              age={person.age}
              style={{margin: '50px'}}
            />
          </div>
        );
      })}
    </div>
  );
}
