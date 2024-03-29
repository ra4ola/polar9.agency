import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page:string;
    selectedPage :SelectedPage
    setSelectedPage : (value:SelectedPage) => void
}

const Link = ({page,selectedPage,setSelectedPage}: Props) => {
    const lowerCasePage = page.toLocaleUpperCase().replace(" ", "") as SelectedPage
  return (
    <AnchorLink
    className={`${selectedPage} === lowerCasePage ? "text-primary" : "" `}
    href = {`#${lowerCasePage}`}
    onClick = {() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link