import React from 'react'
import Add from '@/assets/icon/add-circle.svg'
import Min from '@/assets/icon/min-circle.svg'
import { accordionProps } from '@/App'

type Props = {
    data: accordionProps[]
}

const Accordion = ({ data }: Props) => {
    const [selected, setSelected] = React.useState(null)

    const toggle = (index: any) => {
        if (selected === index) {
            return setSelected(null)
        }
        return setSelected(index)
    }


    return (
        <>
            {data.map((item, index) =>
                <div key={index} className='item bg-white rounded-2xl mb-[60px] p-[10px,20px] flex flex-col gap-4' onClick={() => toggle(index)}>
                    <div className='title flex justify-between text-black items-center' >
                        <h1 className='font-plus-jakarta-sans text-[24px] font-medium'>{item.title}</h1>
                        <img src="" alt="" />
                        {selected === index ?
                            <img src={Min} alt="min" />
                            :
                            <img src={Add} alt="min" />
                        }
                    </div>
                    <div className={`overflow-hidden transition-all duration-200 ease-in-out ${selected === index ? 'max-h-[1000px]' : 'max-h-0'}`}>
                        <p className='text-[#10101050] max-w-[858px]'>
                            {item.desc}
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Accordion