import css from 'styled-jsx/css';
import fetch from "isomorphic-unfetch";

const style = css`
    a {
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

export default function Username({ user }) {
    if(user == undefined) {
        window.location.href = '/';
    }
    
    return (
        <div>
            <article>
                <section>
                    <p>Hi! This is {name} from {location}!</p>
                    <h3>{bio}</h3>
                    <hr />
                    <span>
                        <span>Please visit</span>
                        <a href={html_url}>{html_url}</a>
                        <span>!</span>
                    </span>
                </section>
            </article>
            <style jsx>{style}</style>
        </div>
    )
};

export const getServerSideProps = async ({ query }) => { 
    try {
        const res = await fetch(`https://api.github.com/users/${query.username}`);
        if (res.status == 200) {
            const user = await res.json();
            return {props: {user}};
        } else {
            console.warn("status is not 200 on ajax query at 'user/[username].jsx");
            return {props: {}};
        }
    } catch (e) {
        console.error(e);
        return {props: {}};
    }
}