import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Name() {
    const { query: {name}} = useRouter();

    return (
        <div>
            <p>hi, { name }!</p>
            <Link href="/">
                <a>go back!</a>
            </Link>
        </div>
    )
}