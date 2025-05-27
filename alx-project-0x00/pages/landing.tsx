import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <div>
                <Button title="Submit" styles="m-10 w-2xs h-[30px] rounded-md bg-orange-300 text-black" />
            </div>
            <div>
                <Button title="Save" styles="m-10 w-md h-[50px] rounded-sm bg-blue-200 text-black" />
            </div>
            <div>
                <Button title="Apply" styles="m-10 w-2xl h-[35px] rounded-full bg-yellow-100 text-black" />
                <Button title="Apply" styles="m-10 w-2xl h-[35px] rounded-lg bg-yellow-100 text-black" />
            </div>
        </div>
    )
}

export default Landing
