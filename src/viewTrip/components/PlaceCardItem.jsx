import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function PlaceCardItem({place}) {

  const [photoUrl,setPhotoUrl]=useState();

  useEffect(()=>{
    place&&GetPlacePhoto();
  },[place]);

  const GetPlacePhoto=async()=>{
    const data={
      textQuery:place.placeName
    }
    const result=await GetPlaceDetails(data).then(res=>{

      const photoUrl=PHOTO_REF_URL.replace('{NAME}',res.data.places[0].photos[3].name)
      setPhotoUrl(photoUrl);
    })
  }

  return (
    <Link to={`https://www.google.com/maps/search/?api=1&query=`+place?.placeName} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
      <img className='w-[130px] h-[130px] rounded-xl object-cover' src={photoUrl} alt="" />
      <div>
        <h2 className='font-bold text-lg'>{place.placeName}</h2>
        <p className='text-sm text-gray-400'>{place.placeDetails}</p>
        <h2 className='mt-2'>⌛ {place.timeToTravel}</h2>
        {/* <Button size='sm'><FaLocationDot /></Button> */}
      </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem
