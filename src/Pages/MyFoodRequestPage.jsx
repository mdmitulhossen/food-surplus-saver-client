
import bg from '../assets/addFood/addFoodbg.svg'
import Table from '../components/table/Table';
import Breadcrumb from '../components/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAuth from '../hooks/useAuth';
import Spinner from '../components/spinner/Spinner';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import nodatafound from "../assets/lottie-data/noData1.json";

const MyFoodRequestPage = () => {
    const { user } = useAuth() || {};
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient()



    // tanstack query data load
    const { data: myFoodsData, isLoading, refetch } = useQuery({
        queryKey: ['myfoodsRequest'],
        queryFn: async () => {
            return await axiosSecure.get(`/foodRequests?email=${user?.email}`)
        }
    })

    console.log(myFoodsData)

    // useMutation tanstack query
    const { mutate, isPending } = useMutation({
        mutationFn: async (id) => {
            return await axiosSecure.delete(`/foodRequests/${id}`)
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
            toast.error(error?.response?.data || "Something went wrong ! isn't deleted")
        },
        onSettled: () => {
            queryClient.invalidateQueries('myfoodsRequest')
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



    const requestColumn = [
        {
            header: 'DonarName',
            accessorKey: 'donatorName',
            cell: ({ row }) => {
                return (row?.original?.food[0]?.donatorName)
            }
        },
        {
            header: 'Location',
            accessorKey: 'location',
            cell: ({ row }) => {
                return (row?.original?.food[0]?.location)
            }
        },
        {
            header: 'ExpireDate',
            accessorKey: 'expireDate',
        },
        {
            header: 'RequestedDate',
            accessorKey: 'requestedDate',
        },
        {
            header: 'DonationAmount',
            accessorKey: 'donationMoney',
        },
        {
            header: 'Status',
            accessorKey: 'status',
        },
        {
            header: 'action',
            cell: ({ row }) => <button onClick={() => handleDeleteMyFood(row?.original?._id)} className='bg-red-600 text-white flex justify-center items-center text-xl p-1 rounded-full mx-auto'><i className='bx bx-x'></i></button>
        },
    ]

    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="w-full h-full bg-cover bg-center bg-no-repeat"
        >
            <Helmet><title>Food-saver | Foods-Request</title></Helmet>
            <div className="w-full h-full bg-white/90 py-20">
                <div className='foodContainer w-full'>
                    <Breadcrumb path='My Food Request' />

                    <div className='mt-10 border py-10'>
                        <div className=' text-center mb-12'>
                            <h1 className="text-4xl font-bold text-center text-[#0C4428] inline-block relative pb-2">
                                <span className='w-1/2 h-[4px] bg-[#0C4428] absolute left-1/2 -translate-x-1/2 bottom-0'></span>
                                My All Food Request
                            </h1>
                        </div>
                        {
                            myFoodsData?.data?.length === 0 ? <div className="w-full flex justify-center items-center">
                                <div className="w-1/2 h-[250px]">
                                    <Lottie animationData={nodatafound} loop={true} style={{ height: "100%" }} />
                                    <p className='text-xl font-bold text-[#0C4428] w-full text-center mb-3'>Here haven,t any your requested food</p>
                                </div></div> :
                                isLoading || isPending ? <div className=' w-full  flex justify-center items-center z-10'> <Spinner /></div> :
                                    <Table data={myFoodsData && myFoodsData?.data} columns={requestColumn} />
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyFoodRequestPage;