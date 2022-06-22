import "../src/styles/global.scss";
import { Cover } from "./components/Cover/index";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Cover />
      <Profile />
      <Skills />
    </>
  );
}

export default App;
