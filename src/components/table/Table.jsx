import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";


const Table = ({ data, columns }) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })
    return (
        <div className="w-full">
            <div className="w-full overflow-x-auto">
                <table className='w-full' >
                    <thead >
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className='bg-[#0C4428]/80 text-white'>
                                {headerGroup.headers.map(header => (
                                    <th
                                        className='p-2'
                                        key={header.id}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div>
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}

                                            </div>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className='odd:bg-slate-200'>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className='py-5 px-2 text-center'>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            <div className='flex mt-8 justify-center'>
                <button className='py-2 px-3 bg-gray-300 border-r text-sm lg:text-base' onClick={() => table.setPageIndex(0)}>First page</button>
                <button
                    className='py-2 px-3 bg-gray-300 border-r text-sm lg:text-base'
                    disabled={!table.getCanPreviousPage()}
                    onClick={() => table.previousPage()}
                >
                    Previous page
                </button>
                <button
                    className='py-2 px-3 bg-gray-300 border-r text-sm lg:text-base'
                    disabled={!table.getCanNextPage()}
                    onClick={() => table.nextPage()}
                >
                    Next page
                </button>
                <button className='py-2 px-3 bg-gray-300 text-sm lg:text-base' onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                    Last page
                </button>
            </div>
        </div>
    );
};

export default Table;