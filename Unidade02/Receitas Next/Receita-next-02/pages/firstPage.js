import { SecondComponent } from "./secondPage"
import { ThirdComponent } from "./sub_pages/thirdPage"

export default function FirstMain() {
    return (
        <div>
            <h1>This is the first page, which is inside 'pages' directory</h1>
            <FirstComponent />
            <SecondComponent />
            <ThirdComponent />
        </div>
    )
}

export function FirstComponent() {
    return (
        <div>
            <h1>This is the first component, which is inside 'pages' directory</h1>
        </div>
    )
}