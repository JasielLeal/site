import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

interface Service {
    id: number;
    title: string;
    desc: string;
    type: string;
}

const data: Service[] = [
    { id: 1, title: 'Site Institucional', desc: 'Um site institucional bem projetado e informativo ajuda a construir credibilidade, confiança e autoridade no mercado, além de fornecer uma maneira eficaz para clientes em potencial conhecerem mais sobre a empresa.', type: 'Presença Online' },
    { id: 2, title: 'Desenvolvimento Web', desc: 'Com expertise em Node.js, React, Next.js, HTML, CSS e Prisma ORM, estou aqui para transformar suas ideias em realidade digital. Estou comprometido em oferecer produtos de alta qualidade que superam suas expectativas.', type: 'Sistemas Web' },
    { id: 3, title: 'Landing page', desc: 'Sua presença online é a chave para alcançar novos clientes e expandir seus negócios. Com uma landing page profissional e atrativa, você pode capturar a atenção dos visitantes e convertê-los em clientes fiéis.', type: 'Presença Online' },
];

export function Servicos() {
    return (
        <div className="flex justify-center py-20">
            <div className="w-[1224px] px-5">
                <p className="text-center font-semibold text-primary">Serviços</p>
                <p className="text-center font-semibold text-2xl md:text-4xl mb-5">Soluções que oferecemos</p>
                <div className="flex justify-center">
                    <p className="text-slate-200 text-base text-center max-w-[700px]">
                        Proporcionamos soluções personalizadas, atendimentos de alta qualidade e suportes eficientes para atender às suas necessidades e garantir sua satisfação.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {data?.map((service) => (
                        <Card key={service.id} className="h-[320px] flex flex-col justify-between">
                            <CardHeader>
                                <CardTitle>
                                    {service.title}
                                    <div className="text-sm text-primary">
                                        {service.type}
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{service.desc}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Contratar</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
