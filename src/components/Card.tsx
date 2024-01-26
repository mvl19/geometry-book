export default function Card({children}: {children: React.ReactNode}) {
    return (
        <figure className="flex basis-96 grow shrink justify-center overflow-hidden flex-col items-center">
            {children}
        </figure>
    )
}