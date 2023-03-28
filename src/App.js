//Dave React-Route-Flex
import image from '../src/image/1.jpg'

export default function Home(){

    return(
        
        <div className="flex flex-row gap-10 items-center justify-center h-[500px] border border-black">
        <img className="rounded-full w-25 h-20 object-cover " src={image} alt="image" />
        <div>
            <div className="font-bold">Dave Andrew Arafol</div>
            <div className="font-bold" >HOLY CROSS OF DAVAO COLLEGE</div>
        </div>
        </div>
    )
}