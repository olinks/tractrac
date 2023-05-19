import React from "react";
import notification from "../assets/notification.png"
import { RiSearchLine } from "react-icons/ri"

function Header() {
    return (
<div className="my-2 w-[100%] rounded-[10px] bg-[#F7F7F7] flex flex-row ">
{/* <div className="py-5 m-5 flex w-[70%] justify-start rounded-[8px] items-center h-[39px] border-[1px] border-[#C5C5C5]">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style="color: black;"><g><path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path></g></svg>
    <input type="text" className="bg-transparent py-[10px] outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D] placeholder:text-[12px]" placeholder="Search Pathology Results">

</div> */}
            <div className='py-5 m-5 flex w-[70%] justify-start rounded-[8px] items-center h-[39px] border-[1px] border-[#C5C5C5]'>
              <RiSearchLine className='' />
              <input
                type='text'
                className='bg-transparent py-[10px] outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D] placeholder:text-[12px]'
                placeholder="Search Pathology Results" />
            </div>
<div className="p-2">
    <img className="my-5 border border-[#C5C5C5] rounded-full" src={notification} alt="notification"></img>
</div>
<div className="border-[1px] m-5">
    </div>
    <div className="flex flex-row m-2">
        <div className="rounded-full border-[#ffff] border-4" alt="profile image" style={{height: "60px", width:" 60px", backgroundColor: "rgb(197, 197, 197)"}}>

        </div>
        <div className="ml-2 px-2">
            <h3 className="font-bold">Akule Vivian</h3>
            <h4 className="text-[#100DB1]">DOCTOR</h4>
        </div>
    </div>
</div>
    )
}

export default Header;