

export function Hero() {
    return (
        <section className="bg-gradient-to-tr from-black to-gray-900 text-white">
            <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col
            md:flex-row">
               
                    <div className="basis-1/2">
                        <h1 className="mb-6 text-center md:text-left"><span className="font-handwriting block text-3xl text-center
                        md:text-left">Olá, meu nome é</span>
                            <span className="font-headline text-5xl font-semibold">João</span>
                            <span className="font-headline text-5xl font-light text-blue-400"> Alexandre</span>
                        </h1>

                        <h2 className="font-semibold flex items-center gap-2 md:text-left">
                            <div className="h-1 w-12 rounded-full bg-blue-800"></div>
                            Desenvolvedor JavaScript PHP Front-End</h2>

                        <p className="text-gray-600 my-6">
                            Desenvolvedor Front-end apaixonado por criar experiências.
                        </p>

                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <a href="#" className="underline font-bold text-white">Fale Comigo</a>
                            <span className="italic text-gray-500">ou</span>
                            <a
                                href="#"
                                className="button text-gray-600 hover:text-gray-900
                        flex-itens">
                                Baixe meu CV
                            </a>
                        </div>
                    </div>
                   
                </div>

            
        </section>
    );
}
