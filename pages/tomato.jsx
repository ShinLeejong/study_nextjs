import Link from "next/link";
import Image from "next/image";

export default function Tomato() {
    return (
        <div>
            <Image src="/favicon.ico" alt="버셀 아이콘" width="120" height="120" />
            <Link href="/">
                <a>who are you? go back.</a>
            </Link>
        </div>
    );  
};