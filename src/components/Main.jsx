import React, {useState} from 'react';
import NavPanel from "./NavPanel";
import Hline from "./UI/Hline";
import ContentLinks from "./ContentLinks";
import ProfileCard from "./ProfileCard";
import ProfileSettings from "./ProfileSettings";
import SettingsBlock from "./UI/SettingsBlock";

const Main = () => {
    const [contentFrame, setFrame] = useState(1)

    function getBurger(e) {
        e.target.classList.toggle('active')
        e.target.parentNode.children[0].classList.toggle('active')
    }

    let content;
    if (contentFrame === 1) {
        content =
            <section className="content__profile">
                <ProfileCard/>
                <ProfileSettings/>
            </section>
    }
    if (contentFrame === 2) {
        content =
            <section className="content__profile">
                <SettingsBlock title='Account' description='Account page'>
                    Here will be the Account page
                </SettingsBlock>
            </section>
    }
    if (contentFrame === 3) {
        content =
            <section className="content__profile">
                <SettingsBlock title='Price Plans' description='Price page'>
                    Here will be the Price plans page
                </SettingsBlock>
            </section>
    }
    return (
        <main className='main'>
            <NavPanel/>
            <div onClick={(event => getBurger(event))} className="nav__burger">
                <span/>
            </div>
            <article className="main__content">
                <ContentLinks setFrame={setFrame}/>
                <Hline width={100}/>
                {content}
            </article>
        </main>
    );
};


export default Main;