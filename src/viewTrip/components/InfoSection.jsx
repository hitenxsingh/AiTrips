import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";


function InfoSection({trip}) {

  const [photoUrl,setPhotoUrl]=useState();

  useEffect(()=>{
    trip&&GetPlacePhoto();
  },[trip]);

  const GetPlacePhoto=async()=>{
    const data={
      textQuery:trip?.userSelection?.location?.label
    }
    const result=await GetPlaceDetails(data).then(res=>{

      const photoUrl=PHOTO_REF_URL.replace('{NAME}',res.data.places[0].photos[3].name)
      setPhotoUrl(photoUrl);
    })
  }
  return (
    <div>
        <img src={photoUrl} alt="" className='h-[340px] w-full object-cover rounded-xl'/>
        <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                <div className='flex'>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 '>📆 {trip?.userSelection?.noOfDays} Day</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 '>🪙 {trip?.userSelection?.budget} Budget</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 '>🥂 No. of Traveler: {trip?.userSelection?.traveler} People</h2>

                </div>
            </div>
            <Button><IoIosSend /></Button>
        </div>
    </div>
  )
}

export default InfoSection
