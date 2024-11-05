import { TagInput } from "../Components/TagInputField";
import {useUnloadHook} from "../Hooks/useUnloadHook/useUnloadHook"


function App() {

  useUnloadHook((e: BeforeUnloadEvent) => {
    e.preventDefault();
    const exit = confirm('Are you sure you want to leave?');
    if (exit) window.close();
  }); 



  return (
    <>
      <TagInput tags={['Nodejs', 'MongoDB']} />
    </>
  )
}

export default App
