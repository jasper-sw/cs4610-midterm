import { useContext, useState, useEffect } from 'react';
import { ApiContext } from '../../utils/api_context';
import Transaction from "./Transaction";

export const Question3 = () => {
  const api = useContext(ApiContext);
  const [response, setResponse] = useState([]);
  //const test = api.get('/transactions');
  //setResponse(api.get('/transactions'));

  useEffect(() => {
    api.get('/transactions').then(res =>{
      setResponse(res.transactions);
      //console.log("got: ", res.transactions);
    });
  }, []);

  return (
  <div>Render your transactions here
    {response.length > 0 ? (
      response.map(function(trans, i){
        return (
        <div key={i} style={{backgroundColor: "grey", borderRadius: 7}}>
          <Transaction trans={trans}/>
        </div>
        )
    })
    ) : null}
  </div>
  );
};
