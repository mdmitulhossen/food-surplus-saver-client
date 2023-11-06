import bg from '../assets/addFood/addFoodbg.svg'
import Table from '../components/table/Table';

import movies from '../../public/movie.json'
import { useMemo } from 'react';
const ManageMyFoodPage = () => {
    const data = useMemo(() => movies, [])


    const movieColumns = [
        {
            header: 'ID',
            accessorKey: 'id',
        },
        {
            header: 'Name',
            accessorKey: 'name',
        },
        {
            header: 'Genre',
            accessorKey: 'genre',
        },
        {
            header: 'Rating',
            accessorKey: 'rating',
        },
        {
            header: 'action',
            cell: ({ row }) => <div className='flex gap-3'>
                <button onClick={() => console.log(row)} className='text-red-600 text-xl'><i className='bx bxs-message-square-minus' ></i></button>
                <button onClick={() => console.log(row)} className='text-[#8DC53E] text-xl'><i className='bx bxs-edit-alt' ></i></button>
                <button onClick={() => console.log(row)} className='text-[#0C4428] text-xl'><i className='bx bxs-low-vision' ></i></button>
            </div>
        },
    ]

    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="w-full h-full bg-cover bg-center bg-no-repeat"
        >
            <div className="w-full h-full bg-white/90 py-20">
                <div className='foodContainer w-full'>

                    <Table data={data} columns={movieColumns} />
                </div>

            </div>
        </div>
    );
};

export default ManageMyFoodPage;