import { ListRarities } from "./components/ListRarities";
import data from "./raritiesToReactMap.json";

const App = () => {
   return <ListRarities data={data} />;
};

export default App;
