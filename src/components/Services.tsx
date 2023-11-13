export function Services() {
 const services = [
    {
        title: "web",
        description: 
        "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, HTML5 e CSS3"
      
    },
    {
        title: "Sistemas",
        description:"Desenvolvimento de sistemas"
      
    }
   
    

 ]

    return (
        <section className="container mx-auto my-12 max-w-4xl p-4">
            <div className="p-4 text-center">
                <p className="text-sm font-semibold uppercase text-blue-600">
                    O que faço de melhor
                </p>
                <h2 className="mb-2 font-bold text-blue-900">
                    <span className="mr-2 font-headline text-3xl">Meus</span>
                    <span className="font-handwriting text-4xl">Serviços</span>
                </h2>
                <p className="text-sm text-gray-600">
                    Posso atender uma gama completa de serviços, do front-end ao Back-end
                    Com banco de dados e sistemas.
                </p>

            </div>
            <div className="mt-6 flex flex-col gap-2 md:flex-row">
                {
                    services.map((
                        service, index
                    )=> (
                        <div className="basis-1/3 rounded-lg bg-blue-700 p-4 text-white"
                        key={`service-${index}`}>
                        <h3 className="text-x1 font-bold">{service.title}</h3>
                        <p className="text-sm">{service.description}</p>

                    </div>        
                    ))
                }
            </div>
        </section>
    )
}