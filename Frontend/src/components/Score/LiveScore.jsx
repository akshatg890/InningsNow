import React from 'react'

function Score() {
    
    return (
        <main className='h-screen w-screen flex flex-col items-center'>
            
            <section className='w-full h-1/3 bg-orange-500'>
                
            </section>
            <section className='flex flex-col lg:flex-row w-full h-2/3'>
                <section className='w-full h-1/2 bg-blue-500'>
                    {/* <Update /> */}
                </section>
                <section className='w-full h-1/2 bg-gray-500'>
                    Section C
                </section>
            </section>
            
        </main>
    )
}

export default Score