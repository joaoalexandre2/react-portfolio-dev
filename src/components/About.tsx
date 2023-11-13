export function About() {
    return (
        <section className="container mx-auto my-4 max-w-5xl p-4">
            <div className="relative p-4 text-center">
                <h2 className="text-blue-900 font-bold relative z-10">
                    <span className="mr-2 font-headline text-3xl">Sobre</span>
                    <span className="font-handwriting text-4xl">Mim</span>
                </h2>
                <p className="relative text-sm text-gray-600">
                    Tenho mais de N Projetos executados e gostaria que o proximo seja o seu
                </p>

                <div className="absolute left-1/2 top-3 z-0 h-10 rounded-1g bg-blue-100/40" />
            </div>
            <div className="relative mx-auto mt-20 max-w-lg">
                <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48 lg:w-150">
                    <div className="relative h-full rounded-lg bg-gray-50 p-4">
                        <p className="font-handwriting text-lg font-bold"> Olá</p>
                        <p>
                            <span className="mr-1">Meu Nome é</span>
                            <span className="font-headline font-bold uppercase text-blue-900">
                                João Alexandre
                            </span>
                        </p>
                        <table className="mt-4 w-full text-sm">
                            <tbody>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Idade:
                                    </td>
                                    <td>28</td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Celular:
                                    </td>
                                    <td>
                                        <a href="tel:+5545999223845"
                                            className="underline hover:text-blue-800"
                                        >

                                            +55 45 99922-3845
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Email:
                                    </td>
                                    <td>
                                        joaoalekirst@gmail.com
                                    </td>
                                </tr>
                                <tr>
                                <td className="font-headline font-bold uppercase text-blue-900">
                                        Linkedin:
                                    </td>
                                    <td>
                                        <a href="https://www.linkedin.com/in/joaokirst/"
                                        target="blank">
                                        Linkedin
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                <td className="font-headline font-bold uppercase text-blue-900">
                                        GitHub:
                                    </td>
                                    <td>
                                        <a href="https://github.com/joaoalexandre2"
                                        target="blank">
                                        joaoalexandre2
                                        </a>
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                    </div>

                    <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-cover bg-center hidden md:block md:-left-12 md:-top-12 md:h-72 md:w-56
                   ">
                        <img src="src/img/imagem-joao.png"/>
                    </div>



                </div>
            </div>
        </section>
    )
}