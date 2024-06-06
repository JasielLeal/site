import { FaRocket } from "react-icons/fa";
import { Button } from "./ui/button";
import Slider from "./Slider";

export function Hero() {
    return (
        <div>
            <div className="bg-[url('/backgroundTwo.webp')] flex w-full sm:h-screen justify-center items-center">
                <div className="max-w-[1224px] sm:flex pt-32 sm:pt-0 sm:gap-20">
                    <div className="max-w-[500px] px-5 mb-10">
                        <p className="font-semibold text-4xl mb-5 lg:text-5xl">Eleve a imagem da sua <span className="text-primary">empresa</span> com um website de alta <span className="text-primary">qualidade</span>.</p>
                        <p className="">Multiplique a potência do seu negócio com um website que transmite o valor do seu produto, focado em resultados!</p>
                        <Button className="w-full mt-7 flex items-center gap-2">
                            Fazer Orçamento <FaRocket />
                        </Button>
                    </div>
                    <div className="flex w-full justify-center">
                        <div className="w-[300px] px-5">
                        <Slider />
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}