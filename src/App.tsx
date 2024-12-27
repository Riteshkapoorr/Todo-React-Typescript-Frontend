import "./App.css";
import PageTitle from "./ToDo/Components/PageTitle";
import TaskList from "./ToDo/Components/TaskList";
import AddTask from "./ToDo/Components/AddTask";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const tasks = [
    {
      label: "School",
      name: "Math Assignment",
      DateAdded: new Date("2023-10-01T10:00:00"),
      desc: "Complete the algebra and calculus homework by Monday.",
    },
    {
      label: "School",
      name: "Chemistry Quiz",
      DateAdded: new Date("2023-10-02T11:00:00"),
      desc: "Prepare for the periodic table quiz on Thursday.",
    },
    {
      label: "Home",
      name: "Diwali Shopping",
      DateAdded: new Date("2023-10-03T12:00:00"),
      desc: "Buy sweets, lights, and decorations for Diwali.",
    },
    {
      label: "Home",
      name: "Grocery Shopping",
      DateAdded: new Date("2023-10-04T13:00:00"),
      desc: "Purchase vegetables, fruits, and daily essentials for the week.",
    },
    {
      label: "Office",
      name: "Project Meeting",
      DateAdded: new Date("2023-10-05T14:00:00"),
      descr: "Attend the meeting regarding project deadlines and deliverables.",
    },
    {
      label: "Office",
      name: "Client Presentation",
      DateAdded: new Date("2023-10-06T15:00:00"),
      desc: "Prepare the slides for the upcoming client presentation on Friday.",
    },

    {
      label: "lunch",
      name: "Client Presentation",
      DateAdded: new Date("2023-10-06T15:00:00"),
      desc: "Prepare the slides for the upcoming client presentation on Friday.",
    },
    {
      label: "Eid",
      name: "Client Presentation",
      DateAdded: new Date("2023-10-06T15:00:00"),
      desc: "Prepare the slides for the upcoming client presentation on Friday.",
    },
    {
      label: "Dinner",
      name: "Client Presentation",
      DateAdded: new Date("2023-10-06T15:00:00"),
      desc: "Prepare the slides for the upcoming client presentation on Friday.",
    },
  ];

  return (
    <>
      <PageTitle />
      <div className="container task-parent-container">
        <TaskList />
      </div>
      <AddTask />
    </>
  );
}

export default App;
