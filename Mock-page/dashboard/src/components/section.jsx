function Section({sectionTitle, secondHeader, buttons, subText, imageLink}) {
    return (
        <>
            <div className="bg-cover bg-no-repeat bg-center w-full h-200 text-black" 
                style={{backgroundImage: `url(${imageLink})`}}>
                <div className="flex flex-col items-center justify-center p-10 gap-4">
                    <h2 className="text-6xl text-bold">{sectionTitle}</h2>
                    <p className="text-xl">{secondHeader}</p>
                    <div className="flex flex-row gap-2 justify-center items-center text-white">
                        {buttons.map((item, index) =>(<button key={index} className="px-4 py-2 border border-white bg-cyan-500">{item}</button>))}
                    </div>
                    <p>{subText}</p>
                </div>
            </div>
        </>
    )
}

export default Section;