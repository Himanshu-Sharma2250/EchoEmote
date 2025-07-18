import React from 'react'

const LikedPage = () => {
    return (
        <div className='h-full w-full p-10 flex flex-col gap-5'>
            <div>
                <h1 className='text-4xl text-red-400'>Liked Songs</h1>
                <p>Playlist: </p>
            </div>

            <div>
                <div className="overflow-x-auto rounded-box  bg-white">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className='text-black'>
                                    Title
                                </th>
                                <th className='text-black'>Album</th>
                                <th className='text-black'>Date Added</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LikedPage;