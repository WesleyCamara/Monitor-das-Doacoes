import React, { useState, useEffect } from 'react';
import Axios from 'axios';





 

const GetData = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
      Axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=Q_9Dq5-x6AKhozZ-Pr4RARJLq0xr1B-TEKmmvM_UyPCjvDLJ4dS8Pxya0YI6uedx3kD9YDME9wkwc2Y1Ufgv1VUAEGiYXU3_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFkSJ3OGPU4PNUNksnCEJmJS93T2ZzyujjUpxX3tYNvUSMYBj7AgB7_TWN7yU7wky0W-dnclfdIe&lib=MiU-jTl38wC2L3rz6MLSQoNcSVaJnOjrd")
      .then(response => setData(response))
  
  }, []);
  
     
      return data.data

}

  export default GetData;