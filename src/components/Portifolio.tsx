import { PortifolioCarrosel } from "./PortifolioCarrosel";

export function Portifolio() {
    return (
        <div className="flex justify-center w-full py-10" id="portfolio">
            <div className="max-w-[1224px] px-5">
                <p className="text-2xl md:text-4xl font-semibold text-center">Alguns de nossos</p>
                <p className="text-2xl md:text-4xl font-semibold text-primary text-center mb-10">trabalhos realizados</p>
                <div className="w-[300px] sm:w-[550px] md:w-[750px] lg:w-[950px]">
                    <PortifolioCarrosel />
                </div>
            </div>
        </div>
    )
}