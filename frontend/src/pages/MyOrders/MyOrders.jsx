import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import parcel_icon from '../../assets/parcel_icon.png';  // Ensure correct path to the image

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
            setData(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };
    

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.length === 0 ? (
                    <p>No orders found</p>
                ) : (
                    data.map((order, index) => (
                        <div key={index} className='my-orders-order'>
                            <img src={parcel_icon} alt="Parcel" />
                             {/*  assets */}
                            <p>
                                {order.items.map((item, index) => {
                                    if (index === order.items.length - 1){
                                        return item.name + " x " + item.quantity
                                    }
                                    else{
                                        return item.name + " x " + item.quantity + " , "  
                                    }
                                        
                                    })}
                            </p>
                            <p>${order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                            <button onClick={fetchOrders}>Track Order</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyOrders;
