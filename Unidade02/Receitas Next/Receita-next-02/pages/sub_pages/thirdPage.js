export default function ThirdPage() {
    return (
        <div>
            <h1>This is the third page, which is inside 'sub_pages' directory</h1>
            <ThirdComponent />
        </div>
    )
}

export function ThirdComponent(min, max) {
    min = Math.ceil(2);
    max = Math.floor(50);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return (
        <div>
            <h1>This is the third component, which is inside 'sub_pages' directory</h1>
            <h2>And this number, {randomNumber},  is generated using 2 parameters (min, max), located inside 'sub_pages' directory</h2>
        </div>
    )
}