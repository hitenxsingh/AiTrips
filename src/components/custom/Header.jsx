import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { json, useNavigation } from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';


function Header() {

  const [openDialog, setOpenDialog] = useState(false);

  const user=JSON.parse(localStorage.getItem('user'));
  // useEffect(()=>{
  //   console.log(user);
  // },[])

  const login = useGoogleLogin({
    onSuccess: (codeRes) => GetUserprofile(codeRes),
    onError: (error) => console.log(error)
  })

  const GetUserprofile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
      { mode: 'cors' }, {
      headers: {
        origin: '*',
        AccessControlAllowOrigin: '*',
        Autherization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json',

      }
    }).then((res) => {
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res.data));
      setOpenDialog(false);
      window.location.reload();
    })
  }

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <a href="/">
        <img src='/logo.svg' alt="" />
      </a>
      
      <div>
        {user?
        <div className='flex items-center gap-3'>
          <a href='/create-trip'>
              <Button varient='outline' className='rounded-full'>+ Create Trip</Button>
          </a>
          <a href="/my-trips">
              <Button varient='outline' className='rounded-full'>My Trips</Button>
          </a>
          
          
          <Popover>
            <PopoverTrigger>
              <img className='h-[35px] w-[35px] rounded-full' src={user?.picture} alt="" />
            </PopoverTrigger>
            <PopoverContent><h2 className='cursor-pointer' onClick={()=>{
              googleLogout();
              localStorage.clear();
              window.location.reload();
            }}>Logout</h2></PopoverContent>
          </Popover>

        </div>:<Button onClick={()=>setOpenDialog(true)} >Sign In</Button>
        }
      </div>
      <Dialog open={openDialog}>

        <DialogContent>
          <DialogHeader>

            <DialogDescription>
              <img src="/logo.svg" alt="" />
              <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
              <p>Sign in to the App with Google authentication securely</p>
              <Button onClick={login} className='w-full mt-5 flex gap-4 items-center' >

                <FcGoogle className='h-7 w-7' />  Sign In with Google

              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Header
