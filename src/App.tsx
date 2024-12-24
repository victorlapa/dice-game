import { DiceContainer } from './view/games/dice/dice-container';
import { DiceContextProvider } from './view/games/dice/dice-context-provider';
import { ResourceContainer } from './view/ui/ResourceContainer';

function App() {
  return (
    <DiceContextProvider>
      <div className="w-full min-h-screen bg-green-950">
        <div className="max-w-screen-lg flex flex-col items-center m-auto border-l border-r h-screen gap-5 py-10">
          <ResourceContainer amount={1} />
          <DiceContainer />
        </div>
      </div>
    </DiceContextProvider>
  );
}

export default App;
