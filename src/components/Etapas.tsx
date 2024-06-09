import { FaFlagCheckered } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { BsFillSendCheckFill } from "react-icons/bs";
export function Etapas() {
    return (
        <div className="flex justify-center py-10">
            <div className="max-w-[1224px]">
                <p className="text-2xl md:text-4xl text-center font-semibold mb-10">
                    Etapas do processo de <span className="text-primary">Desenvolvimento</span>
                </p>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <p className="flex items-center gap-4 text-base font-semibold">
                            <span className="text-primary border-primary  p-2 rounded-full border-2">
                                <FaFlagCheckered />
                            </span> Consultoria Inicial</p>
                        <div className="flex flex-col ml-4">
                            <div className="w-px h-5 bg-primary"></div>
                            <div className="w-px h-5 bg-primary"></div>
                        </div>
                        <p className="flex items-center gap-4 text-base font-semibold">
                            <span className="text-primary border-primary  p-2 rounded-full border-2">
                                <FaListCheck />
                            </span> Estratégia de Projeto</p>
                        <div className="flex flex-col ml-4">
                            <div className="w-px h-5 bg-primary"></div>
                            <div className="w-px h-5 bg-primary"></div>
                        </div>
                        <p className="flex items-center gap-4 text-base font-semibold">
                            <span className="text-primary border-primary  p-2 rounded-full border-2">
                                <MdDesignServices />
                            </span> Design e Aprovações</p>
                        <div className="flex flex-col ml-4">
                            <div className="w-px h-5 bg-primary"></div>
                            <div className="w-px h-5 bg-primary"></div>
                        </div>
                        <p className="flex items-center gap-4 text-base font-semibold">
                            <span className="text-primary border-primary  p-2 rounded-full border-2">
                                <FaGears />
                            </span> Desenvolvimento</p>
                        <div className="flex flex-col ml-4">
                            <div className="w-px h-5 bg-primary"></div>
                            <div className="w-px h-5 bg-primary"></div>
                        </div>
                        <p className="flex items-center gap-4 text-base font-semibold">
                            <span className="text-primary border-primary  p-2 rounded-full border-2">
                                <BsFillSendCheckFill />
                            </span> Entrega</p>
                    </div>
                </div>
            </div>
        </div>
    )
}