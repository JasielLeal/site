import Image from "next/image";
import logo from '../../public/logos.png'
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator"



export function Footer() {
    return (
        <div className="flex justify-center bg-card">
            <div className="w-[1224px] px-5">
                <div className="flex flex-col gap-10 py-10 h-[250px] mb-64 sm:grid sm:grid-cols-2 sm:mb-32 md:grid-cols-3 md:mb-0">
                    <div className="flex justify-between flex-col gap-4">
                        <Image src={logo} alt="logo do site" width={170} />
                        <p className="text-slate-100">Tornar o mundo um lugar melhor através da construção de hierarquias elegantes.</p>
                        <div className="flex items-center gap-4 text-2xl text-slate-100 ">
                            <Link href='/' className="hover:text-primary">
                                <FaInstagram />
                            </Link>
                            <Link href='/' className="hover:text-primary">
                                <FaLinkedin />
                            </Link>
                            <Link href='/' className="hover:text-primary">
                                <FaWhatsapp />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-2">
                        <p className="font-semibold text-white">Suporte</p>
                        <p className="text-slate-200">Documentação</p>
                        <p className="text-slate-200">Dúvidas</p>
                        <p className="text-slate-200">Guias</p>
                    </div>
                    <div className="flex flex-col justify-between gap-2">
                        <p className="font-semibold text-white">Legal</p>
                        <p className="text-slate-200">Termos de Serviço</p>
                        <p className="text-slate-200">Termos de Privacidades</p>
                        <p className="text-slate-200">Contratos</p>
                    </div>
                </div>
                <Separator />
                <p className="py-5 text-center text-white">2024 Jasiel Leal, Todos os direitos reservados.</p>
            </div>
        </div>
    )
}