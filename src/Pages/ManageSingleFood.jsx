import bg from '../assets/addFood/addFoodbg.svg'
import Table from '../components/table/Table';

import foodsData from '../../public/food.json'
import { useMemo } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { useNavigate } from 'react-router-dom';


const ManageSingleFood = () => {
    const data = useMemo(() => foodsData, [])
    const navigate = useNavigate()

    console.log(data)

    const data2 = [{
        requester: "John Doe",
        requesterImage: "https://example.com/johndoe.jpg",
        requesterEmail: "john.doe@example.com",
        timeAndDate: "2023-12-01T15:30:00",
        status: "Pending"
    }]


    const requestColumn = [
        {
            header: 'Requester',
            accessorKey: 'requester',
        },
        {
            header: 'Image',
            // accessorKey: 'requesterImage',
            cell: ({ row }) => (
                <img
                    src={row?.original?.foodImgURL}
                    alt={row?.original?.name}
                    className="w-16 h-16 rounded object-cover mx-auto" // You can adjust the width and height as needed
                />
            ),
            // width: 100
        },
        {
            header: 'Requester Email',
            accessorKey: 'requesterEmail',
        },
        {
            header: 'TimeAndDate',
            accessorKey: 'timeAndDate',
        },
        {
            header: 'Status',
            accessorKey: 'status',
            cell: ({ row }) => (

                row?.original?.status.toLowerCase() === 'available' ?
                    <select className='px-2  border border-[#8DC53E] rounded-md w-4/5 mx-auto'>
                        <option value="available" selected>Available</option>
                        <option value="delivered">Delivered</option>
                        <option value="pending">Pending</option>
                    </select>
                    : row?.original?.status.toLowerCase() === 'delivered' ?
                        <select className='px-2  border border-[#8DC53E] rounded-md w-4/5 mx-auto'>
                            <option value="available">Available</option>
                            <option value="delivered" selected>Delivered</option>
                            <option value="pending">Pending</option>
                        </select>
                        :
                        <select className='px-2  border border-[#8DC53E] rounded-md w-4/5 mx-auto'>
                            <option value="available">Available</option>
                            <option value="delivered">Delivered</option>
                            <option value="pending" selected>Pending</option>
                        </select>
            )
        }
    ]

    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="w-full h-full bg-cover bg-center bg-no-repeat"
        >
            <div className="w-full h-full bg-white/90 py-20">
                <div className='foodContainer w-full'>
                    <Breadcrumb path={'Manage Single Food'} />

                    <div className='mt-10 border py-10'>
                        <h1 className="text-4xl font-bold text-center text-[#0C4428] mb-16">{'FOOD NAME'}  </h1>

                        <Table data={data2} columns={requestColumn} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageSingleFood;