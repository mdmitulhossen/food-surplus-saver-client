import bg from '../assets/addFood/addFoodbg.svg'
import Table from '../components/table/Table';
import Breadcrumb from '../components/Breadcrumb';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Spinner from '../components/spinner/Spinner';
import toast from 'react-hot-toast';


const ManageSingleFood = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient()

    // tanstack foods query data load
    const { data: foodById, isLoading: foodByIdLoading, } = useQuery({
        queryKey: ['manageSinglefoods'],
        queryFn: async () => {
            return await axiosSecure.get(`/foods/${id}`)
        }
    })

    // tanstack requestFood query data load
    const { data: foodRequests, isLoading, refetch } = useQuery({
        queryKey: ['manageSinglefoodsRequest'],
        queryFn: async () => {
            return await axiosSecure.get(`/foodRequests?id=${id}`)
        }
    })

    // useMutation food update status tanstack query
    const { mutate: foodUpdate, isPending: foodPending } = useMutation({
        mutationFn: async (updateData) => {
            console.log(updateData)
            return await axiosSecure.patch(`/foods/${updateData[0]}`, updateData[1])
        },
        onSuccess: () => {
            // toast.success('Food status upadate successfully')
            refetch()
        },
        onError: (error) => {
            console.log(error)
            toast.error("Something went wrong ! isn't food status updated")
        },
        onSettled: () => {
            queryClient.invalidateQueries('manageSinglefoods')
        }
    })


    // useMutation food request update status tanstack query
    const { mutate: foodRequestUpdate, isPending: foodRequstPending } = useMutation({
        mutationFn: async (updateData) => {
            console.log('mutaion', updateData)
            return await axiosSecure.patch(`/foodRequests/${updateData[0]}`, updateData[1])
        },
        onSuccess: () => {
            toast.success('Food request status upadate successfully')
            refetch()
        },
        onError: (error) => {
            console.log(error)
            toast.error("Something went wrong ! isn't updated")
        },
        onSettled: () => {
            queryClient.invalidateQueries('manageSinglefoodsRequest')
        }
    })


    // handle food status update

    const handleStatusUpdate = (requestId, foodId, changeStatus) => {
        console.log(requestId, foodId, changeStatus)
        const updateData = {
            status: changeStatus 
        }
        foodRequestUpdate([requestId, updateData])
        foodUpdate([foodId, updateData])
    }



    // console.log(foodRequests?.data, foodById?.data)

    // const data2 = [{
    //     requester: "John Doe",
    //     requesterImage: "https://example.com/johndoe.jpg",
    //     requesterEmail: "john.doe@example.com",
    //     timeAndDate: "2023-12-01T15:30:00",
    //     status: "Pending"
    // }]


    const requestColumn = [
        {
            header: 'Requester',
            accessorKey: 'requesterName',
        },
        {
            header: 'Image',
            // accessorKey: 'requesterImage',
            cell: ({ row }) => (
                <img
                    src={row?.original?.requesterImageURL}
                    alt={row?.original?.requesterName}
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
            accessorKey: 'requestedDate',
        },
        {
            header: 'Status',
            accessorKey: 'status',
            cell: ({ row }) => (

                row?.original?.status?.toLowerCase() === 'available' ?
                    <select onChange={(e) => handleStatusUpdate(row?.original?._id, row?.original?.foodID, e.target.value)} className='px-2  border border-[#8DC53E] rounded-md w-4/5 mx-auto'>
                        <option value="available" selected>Available</option>
                        <option value="delivered">Delivered</option>
                        <option value="pending">Pending</option>
                    </select>
                    : row?.original?.status?.toLowerCase() === 'delivered' ?
                        <select onChange={(e) => handleStatusUpdate(row?.original?._id, row?.original?.foodID, e.target.value)} className='px-2  border border-[#8DC53E] rounded-md w-4/5 mx-auto'>
                            <option value="available">Available</option>
                            <option value="delivered" selected>Delivered</option>
                            <option value="pending">Pending</option>
                        </select>
                        :
                        <select onChange={(e) => handleStatusUpdate(row?.original?._id, row?.original?.foodID, e.target.value)} className='px-2  border border-[#8DC53E] rounded-md w-4/5 mx-auto'>
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
                        <h1 className="text-4xl font-bold text-center text-[#0C4428] mb-16">{foodById?.data?.foodName || ''}  </h1>

                        {
                            foodRequests?.data?.length === 0 ? <div className="col-span-full flex justify-center items-center">No Data Available</div> :
                            isLoading || foodRequstPending || foodPending || foodByIdLoading ? <div className=' w-full  flex justify-center items-center z-10'> <Spinner /></div>
                                : <Table data={foodRequests?.data} columns={requestColumn} />
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageSingleFood;