import React, { useContext, useEffect } from 'react';
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';


const Verify = () => {

        const [ searchParams,setSearchParams] = useSearchParams();
        const success = searchParams.get("success")
        const orderId = searchParams.get("orderId")
        const {url} = useContext(StoreContext);
        const navigate = useNavigate();

        const verifyPayment = async () => {
            const response = await axios.post(url+"/api/order/verify",{success,orderId});
            if (response.data.success) {
                navigate("/myorders");
            }
            else{
                navigate("/")
            }
        }

        useEffect(()=>{
            verifyPayment();
        },[])
        
  return (
    <div className='verify'>
        <div className='spinner'></div>
      
    </div>
  )
}

export default Verify;



// import React, { useContext, useEffect } from 'react'; // Corrected: Import useContext and useEffect from React
// import './Verify.css';
// import { useSearchParams, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import { StoreContext } from '../../context/StoreContext'; // Import StoreContext
// import axios from 'axios'; // Import axios for making API calls

// const Verify = () => {
//   const [searchParams] = useSearchParams(); // Extract search parameters from URL
//   const success = searchParams.get("success");
//   const orderId = searchParams.get("orderId");
//   const { url } = useContext(StoreContext); // Use StoreContext to get the URL
//   const navigate = useNavigate(); // Use navigate to programmatically navigate

//   const verifyPayment = async () => {
//     try {
//       const response = await axios.post(`${url}/api/order/verify`, { success, orderId }); // Verify the payment with the backend
//       if (response.data.success) {
//         navigate("/myorders"); // Navigate to orders page on success
//       } else {
//         navigate("/"); // Navigate to home page on failure
//       }
//     } catch (error) {
//       console.error("Payment verification failed", error);
//       navigate("/"); // Handle the error by redirecting to home
//     }
//   };

//   useEffect(() => {
//     verifyPayment(); // Call the verifyPayment function when the component mounts
//   }, []); // Empty dependency array to run it once

//   return (
//     <div className='verify'>
//       <div className='spinner'></div>
//     </div>
//   );
// };

// export default Verify;

