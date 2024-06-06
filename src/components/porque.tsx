import Image from "next/image";
import { CgIfDesign } from "react-icons/cg";
import { FaCircleCheck } from "react-icons/fa6";
import baiaformosatour from '@/assets/baiaformosatour.png'

export function Porque() {
    return (
        <div className="my-10 flex justify-center">
            <div className="max-w-[1224px]">
                <div className="w-full text-center mb-10">
                    <p className="text-2xl md:text-4xl font-semibold">Desenvolvimento web que</p>
                    <p className="text-2xl md:text-4xl font-semibold text-primary">vende o seu conteúdo</p>
                </div>
                <div className="md:grid md:grid-cols-9">
                    <div className="px-5 md:col-span-4 max-w-[500px] flex flex-col justify-between">
                        <p className="text-5xl text-primary"><CgIfDesign /></p>
                        <p className="text-2xl font-semibold mb-2">Design por quem realmente entende</p>
                        <p className="text-slate-200">
                            Todo o layout é construído do zero, projetado para comunicar com seu público e refletir sua identidade visual</p>
                        <p className="flex items-center gap-2"><span className=" my-3 text-primary"><FaCircleCheck /></span>Layout 100% personalizado.</p>
                        <p className="flex items-center gap-2"><span className=" my-3 text-primary"><FaCircleCheck /></span>Layout 100% personalizado.</p>
                        <p className="flex items-center gap-2"><span className=" my-3 text-primary"><FaCircleCheck /> </span>Layout 100% personalizado.</p>
                    </div>
                    <div className="px-5 mt-5 md:col-span-5">
                        <Image src={baiaformosatour} alt="logo baia formosa tour" />
                    </div>
                </div>
            </div>
        </div>
    )
}