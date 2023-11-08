import bg from '../assets/addFood/addFoodbg.svg'
import Table from '../components/table/Table';
import Breadcrumb from '../components/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import Spinner from '../components/spinner/Spinner';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';


const ManageMyFoodPage = () => {

    const { user } = useAuth() || {};
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient()

    // tanstack query data load
    const { data: myFoodsData, isLoading, refetch } = useQuery({
        queryKey: ['manageMyfoods'],
        queryFn: async () => {
            return await axiosSecure.get(`/foods?email=${user?.email}`)
        }
    })
    
    // console.log(myFoodsData)


    // useMutation tanstack query
    const { mutate, isPending } = useMutation({
        mutationFn: async (id) => {
            return await axiosSecure.delete(`/foods/${id}`)
        },
        onSuccess: () => {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            refetch()
        },
        onError: (error) => {
            console.log(error)
            toast.error("Something went wrong ! isn't deleted")
        },
        onSettled: () => {
            queryClient.invalidateQueries('manageMyfoods')
        }
    })


    // handle delete my food
    const handleDeleteMyFood = async (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                mutate(id)
            }
        });
    }


    const foodsColumn = [
        {
            header: 'ID',
            accessorKey: '_id',
        },
        {
            header: 'Name',
            accessorKey: 'foodName',
        },
        {
            header: 'Image',
            // accessorKey: 'foodImgURL',
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
            header: 'ExpireDate',
            accessorKey: 'expireDate',
        },
        {
            header: 'Quantity',
            accessorKey: 'quantity',
        },
        {
            header: 'status',
            accessorKey: 'status',
        },
        {
            header: 'action',
            cell: ({ row }) => <div className='flex gap-3 justify-center'>
                <button onClick={() => handleDeleteMyFood(row?.original?._id)} className='text-red-600 text-xl'><i className='bx bxs-message-square-minus' ></i></button>
                <button onClick={() => navigate(`/food/update/${row?.original?._id}`)} className='text-[#8DC53E] text-xl'><i className='bx bxs-edit-alt' ></i></button>
                <button onClick={() => navigate(`/manage/${row?.original?._id}`)} className='text-[#0C4428] text-xl'><i className='bx bxs-low-vision' ></i></button>
            </div>
        },
    ]

    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="w-full h-full bg-cover bg-center bg-no-repeat"
        >
            <Helmet><title>Food-Saver | Manage-Foods</title></Helmet>
            <div className="w-full h-full bg-white/90 py-20">
                <div className='foodContainer w-full'>
                    <Breadcrumb path='Manage My Food' />

                    <div className='mt-10 border py-10'>
                        <h1 className="text-4xl font-bold text-center text-[#0C4428] ">My Food  </h1>
                        <p className="text-gray-500 lg:w-1/2 md:w-4/5 w-full mt-3 mx-auto text-center mb-20">
                            "Help reduce food waste and fight hunger in your community by adding details about the surplus food you have."
                        </p>
                        {
                            myFoodsData?.data?.length === 0 ? <div className='w-full flex justify-center items-center'>
                                <div className='w-full flex justify-center items-center'>
                                    <div className='w-full flex justify-center items-center'>
                                        <p className='text-2xl font-bold text-[#0C4428]'>You have no food</p>
                                    </div>
                                </div>
                            </div>
                        :
                            isLoading || isPending ? <div className=' w-full  flex justify-center items-center z-10'> <Spinner /></div>
                                : <Table data={myFoodsData?.data} columns={foodsColumn} />
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageMyFoodPage;