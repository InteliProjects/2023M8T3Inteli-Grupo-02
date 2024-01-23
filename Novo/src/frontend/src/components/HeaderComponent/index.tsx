import Link from "next/link";
import { ReactComponentElement } from "react";
import { IoIosArrowForward } from "react-icons/io";7

export default function HeaderComponent(props: {
    Icon: any,
    text: string,
    active: boolean,
    change: any,
    page: string
}) {

    function changeActive() {
      if(props.page == "/") props.change([true, false])
      else props.change([false, true])
    }

    const IconElement = props.Icon;
    return (
        <Link href={`${props.page}`} onClick={() => {changeActive()}} className={`w-[80%] ${props.active ? "bg-primary-blue text-white" : "text-black"} hover:bg-primary-blue hover:text-white rounded-[12px] h-11 flex flex flex-row items-center justify-between p-4`}>
          <div className="flex flex-row items-center justify-center gap-2">
            <div>
              <IconElement />
            </div>
            <div>{props.text}</div>
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </Link>
    )
}