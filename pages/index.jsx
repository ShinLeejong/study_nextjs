import Link from "next/link";
import { useState } from "react";
// import fetch from "isomorphic-unfetch";

function Index() {
    const [username, setUsername] = useState(null);
    return(
        <>
            <div className="wrapper__index">
                <h2>Hello there!</h2>
                <label>Insert your github name:&nbsp;</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
                <br />
                <Link href={'/user/' + (typeof username == 'string' ? username : username?.toString())}>
                    <a onClick="javascript:void(0)" style={{textTransform: 'uppercase'}}>Search!</a>
                </Link>
            </div>
            <style jsx>{`
                .wrapper__index {
                    padding-top: .5rem;
                }

                h2 {
                    margin-top: 0;
                }
            `}
            </style>
        </>
    );
};

// export const getServerSideProps = async () => {
//     try {
//         const res = await fetch("https://api.github.com/users/shinleejong");    
//         if (res.status == 200) {
//             const user = await res.json();
//             return {props: {user}};
//         } else {
//             console.warn("res.status != 200 at function on index.jsx > getServerSideProps");
//             return {props: {}};
//         }
//     } catch (e) {
//         console.error(e);
//         return {props: {}};
//     }
// }

export default Index;