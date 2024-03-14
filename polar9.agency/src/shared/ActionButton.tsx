import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

type Props = {
    children : React.ReactNode;
    setSelectedPage : (value:SelectedPage) => void;
}



const ActionButton = ({children, setSelectedPage} : Props) => {
  return (
    <AnchorLink
    className='rounded-md bg-red-700 text-xls text-white border-spacing-1 border-btn-color-black px-10 py-3 hover:bg-red-500 transition duration-300 ease-in-out font-montserrat'
    onClick={() => setSelectedPage(SelectedPage.BookCall)}
    href='#${SelectedPage.BookCall}'
    >
    {children}
    </AnchorLink>
  )
}

export default ActionButton
