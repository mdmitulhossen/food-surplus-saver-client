
import bg from '../assets/addFood/addFoodbg.svg'
import Table from '../components/table/Table';

import foodsData from '../../public/food.json'
import { useMemo } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { useNavigate } from 'react-router-dom';

const MyFoodRequestPage = () => {
    const data = useMemo(() => foodsData, [])
    const navigate = useNavigate()

    console.log(data)
    // ● Donar Name
    // ● Pickup Location
    // ● Expire Date
    // ● Request Date
    // ● Your Donation Amount
    // ● Status (available/delivered)
    // ● Cancel Request Button.

    const data2 = [{
        doanarName: "John Doe",
        location: "https://example.com/johndoe.jpg",
        expireDate: "john.doe@example.com",
        requestDate: "2023-12-01T15:30:00",
        donationAmount: '500',
        status: "available"
    }]


    const requestColumn = [
        {
            header: 'DoanarName',
            accessorKey: 'doanarName',
        },
        {
            header: 'Location',
            accessorKey: 'location',
        },
        {
            header: 'ExpireDate',
            accessorKey: 'expireDate',
        },
        {
            header: 'RequestDate',
            accessorKey: 'requestDate',
        },
        {
            header: 'DonationAmount',
            accessorKey: 'donationAmount',
        },
        {
            header: 'Status',
            accessorKey: 'status',
        },
        {
            header: 'action',
            cell: ({ row }) => <button onClick={() => console.log(row)} className='bg-red-600 text-white flex justify-center items-center text-xl p-1 rounded-full mx-auto'><i className='bx bx-x'></i></button> 
        },
    ]

    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="w-full h-full bg-cover bg-center bg-no-repeat"
        >
            <div className="w-full h-full bg-white/90 py-20">
                <div className='foodContainer w-full'>
                    <Breadcrumb path='My Food Request' />

                    <div className='mt-10 border py-10'>
                        <h1 className="text-4xl font-bold text-center text-[#0C4428] mb-16">My All Food Request</h1>

                        <Table data={data2} columns={requestColumn} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyFoodRequestPage;