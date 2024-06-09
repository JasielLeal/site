import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const data = [
    { id: 1, value: '1', title: 'Além do custo de desenvolvimento, tenho algum custo adicional ou recorrente?', content: 'Sim, Hospedagem – Quando desenvolvemos um website, podemos hospedá-lo onde você preferir, inclusive prestamos esse serviço também, mas não é obrigatório conosco.' },
    { id: 2, value: '2', title: 'Qual é o prazo de desenvolvimento?', content: 'O prazo de entrega do projeto pode variar de acordo com a sua complexidade. Para websites, geralmente leva de 1 a 2 semanas, enquanto sistemas web podem demandar de 1 a 2 meses, dependendo das funcionalidades e complexidades envolvidas.' },
    { id: 3, value: '3', title: 'Sou de outra cidade, tem algum problema?', content: 'Atendemos clientes em todo o Brasil, sem restrições geográficas. Além disso, estamos abertos para projetos internacionais. Se você tiver alguma dúvida ou desejar mais informações, sinta-se à vontade para entrar em contato com nossa equipe.' },
]

export function Perguntas() {
    return (
        <div className="flex justify-center my-10">
            <div className='w-[1224px] px-5'>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-center font-semibold text-primary">Perguntas frequentes</p>
                    <p className="text-center font-semibold text-2xl md:text-4xl mb-10 max-w-[700px]">Algumas dúvidas que nossos clientes têm antes de acelerar o seu negócio.</p>
                </div>
                {data.map((service) => (
                    <Accordion type="single" collapsible key={service.id}>
                        <AccordionItem value={service.value}>
                            <AccordionTrigger className="text-left">{service.title}</AccordionTrigger>
                            <AccordionContent>
                                {service.content}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}