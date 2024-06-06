import Image from "next/image";
import { CgIfDesign } from "react-icons/cg";
import { FaCircleCheck, FaGoogle } from "react-icons/fa6";
import metricas from '@/assets/metricas.png'

export function Porque2() {
    return (
        <div className="my-10 flex justify-center">
            <div className="max-w-[1224px]">
                <div className="md:grid md:grid-cols-9 justify-between flex flex-col-reverse">
                    <div className="px-5 mt-5 md:col-span-5">
                        <Image src={metricas} alt="logo baia formosa tour" height={400} />
                    </div>
                    <div className="px-5 md:col-span-4 max-w-[500px] flex flex-col justify-between">
                        <p className="text-5xl text-primary"><FaGoogle /></p>
                        <p className="text-2xl font-semibold mb-2">Google Friendly</p>
                        <p className="text-slate-200">
                            Posicionamento na web é essencial. Não adianta um site bonito e funcional, sem clientes. Desenvolvemos de acordo com as diretrizes impostas pelo Google.						</p>
                        <p className="flex items-center gap-2"><span className=" my-3 text-primary"><FaCircleCheck /></span>Melhor posicionamento orgânico</p>
                        <p className="flex items-center gap-2"><span className=" my-3 text-primary"><FaCircleCheck /></span>Sistema de SEO avançado.</p>
                        <p className="flex items-center gap-2"><span className=" my-3 text-primary"><FaCircleCheck /> </span>Rápido e intuitivo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}