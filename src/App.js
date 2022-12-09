import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Age, name, Lname, Mname, Profession} from "./store/action/action";


function App() {
  const firstName  = useSelector((state) =>state.firstName);
  const lastName  = useSelector((state) => state.lastName);
  const middleName  = useSelector((state) => state.middleName);
  const age  = useSelector((state) => state.age);
  const profession  = useSelector((state) => state.profession);

  const dispatch = useDispatch();

  const [value , setValue] = useState()
  const [lValue, setLValue] = useState()
  const [mValue, setMValue] = useState()
  const [aValue, setLAValue] = useState()
  const [pValue, setPValue] = useState()
  return (
    <div>
    <div > 
    <input   type="text" placeholder="nigatu " aria-label="Full name"value={value} onChange={(e) => setValue(e.target.value)}/>
    <button  type="button"onClick={() => dispatch(name(value))}>Dispatch</button>
    <p >FirstName: {firstName}</p>
    </div>

    <div >
    <input   type="text" placeholder="miki" aria-label="Full name" value={mValue} onChange={(e) => setMValue(e.target.value)}/>
    <button  type="button"onClick={() => dispatch(Mname(mValue))}>Dispatch</button>
    <p >MiddleName: {middleName}</p>
    </div>


    <div >
    <input   type="text" placeholder="sami" aria-label="Full name"value={lValue} onChange={(e) => setLValue(e.target.value)}/>
    <button  type="button"onClick={() => dispatch(Lname(lValue))}>Dispatch</button>
    <p >LastName: {lastName}</p>
    </div>


    <div >
    <input  type="text" placeholder="20" aria-label="Full name"value={aValue} onChange={(e) => setLAValue(e.target.value)}/>
    <button  type="button"onClick={() => dispatch(Age(aValue))}>Dispatch</button>
    <p>Age: {age}</p>
    </div>

    <div >
    <input   type="text" placeholder="Athletic" aria-label="Full name"value={pValue} onChange={(e) => setPValue(e.target.value)}/>
    <button  type="button"onClick={() => dispatch(Profession(pValue))}>Dispatch</button>
    <p>Profession: {profession}</p> 
    </div>




    </div>
  );
}

export default App;
