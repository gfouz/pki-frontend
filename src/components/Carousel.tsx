import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface CarouselDataProps {
  headerText?: string | null;
  subText?: string | null;
  image: string;
}

const MySlider = () => {

const CarouselData: CarouselDataProps = [
  {
    headerText: null,
    subText: 'Sub Text One',
    image: 'https://picsum.photos/300/300',
  },
  {
    headerText: 'Header Text Two',
    subText: null,
    image: 'https://picsum.photos/1200/800',
  },
  {
    headerText: null,
    subText: null,
    image: './images/login2.jpg',
  },
  {
    headerText: 'Header Text Four',
    subText: 'Sub Text Four',
    image: './images/login2.jpg',
  },
  {
    headerText: 'Header Text Five',
    subText: 'Sub Text Five',
    image: 'https://picsum.photos/480/360',
  },
]
  return    <Carousel
              data={CarouselData}
              autoPlay={true}
              rightItem={<FaArrowRight />}
              leftItem={<FaArrowLeft />}
              animationDuration={3000}
              headerTextType="black"
              subTextType="white"
              size="normal"
            />
}

export default MySlider;