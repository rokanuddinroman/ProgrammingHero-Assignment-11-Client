import React from 'react';
import useProducts from '../../CustomHooks/useProducts/useProducts';
import { IoBag, IoBarChart, IoPersonSharp } from 'react-icons/io5';
import { FiClock } from 'react-icons/fi';
import './Overview.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import useMyProduct from '../../CustomHooks/useMyProduct/useMyProduct';
const Overview = () => {
    const { products, spinner } = useProducts();
    const { myProducts } = useMyProduct()
    return (
        <div className="container">
            <h2 style={{ marginBlock: "2rem" }} className='heading__2'>Overview</h2>
            {
                !spinner &&
                <>
                    <div className="overview__info">
                        <div className='overview__info__card'>
                            <div><IoBag className='icons' color="red" /></div>
                            <p>{products.length}</p>
                            <span>Total Products</span>
                        </div>
                        <div className='overview__info__card'>
                            <div><IoBarChart className='icons' color="red" /></div>
                            <p>{myProducts.length}</p>
                            <span>My Products</span>
                        </div>
                        <div className='overview__info__card'>
                            <div><IoPersonSharp className='icons' color="red" /></div>
                            <p>Marvel</p>
                            <span>Top Supplier</span>
                        </div>
                        <div className='overview__info__card'>
                            <div><FiClock className='icons' color="red" /></div>
                            <p>10 min ago</p>
                            <span>Last Sold</span>
                        </div>
                    </div>
                    <div className="overview__chart">
                        <ResponsiveContainer width="100%" height={400}>
                            <AreaChart
                                height={200}
                                data={products}
                                syncId="anyId"
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="productname" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="quantity" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </>
            }
            {
                spinner &&
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                    <img style={{ width: '200px' }} src="https://flevix.com/wp-content/uploads/2019/07/Disk-Preloader-1.gif" alt="" />
                </div>
            }

        </div>
    );
};

export default Overview;