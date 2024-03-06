import "./App.css";
import ParamEditor from "./components/ParamEditor";
export interface Param {
  id: number;
  name: string;
  type: "string";
}

const params: Param[] = [
  { id: 1, name: "Назначение", type: "string" },
  { id: 2, name: "Длина", type: "string" },
];

const model = {
  paramValues: [
    { paramId: 1, value: "повседневное" },
    { paramId: 2, value: "макси" },
  ],
  colors: [],
};
function App() {
  return (
    <div>
      <ParamEditor params={params} model={model} />
    </div>
  );
}

export default App;
