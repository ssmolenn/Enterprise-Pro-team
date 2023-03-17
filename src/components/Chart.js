import axios from 'axios';
import React from 'react';

const baseURL = "http://127.0.0.1:8050/"

export default function Chart()  {

  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

 

  return (
    <div>
      <h1>Temperature chart</h1>

    </div>
  );
}