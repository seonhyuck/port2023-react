import React from "react";
const footerText = [
    {
        title: "youtube",
        desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
        link: "https://www.youtube.com/@Webstoryboy",
    },
    {
        title: "github",
        desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
        link: "https://github.com/webstoryboy",
    },
    {
        title: "blog",
        desc: "블러그에 오시면 더 많은 정보를 볼 수 있습니다.",
        link: "https://webstoryboy.co.kr",
    },
    {
        title: "gsap",
        desc: "GSAP에 오시면 더 많은 강의를 볼 수 있습니다.",
        link: "https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq",
    },
    {
        title: "react",
        desc: "리액트로 만든 사이트를 같이 만들어 봅니다.",
        link: "https://github.com/webstoryboy/port2023-react",
    },
    {
        title: "vue",
        desc: "뷰로 만든 사이트를 같이 만들어 봅니다.",
        link: "https://github.com/webstoryboy/port2023-vue",
    },
    {
        title: "next",
        desc: "넥스트로 만든 사이트를 같이 만들어 봅니다.",
        link: "https://github.com/webstoryboy/port2023-next",
    },
];

const Footer = () => {
    return <div className="right">
    <h3>social</h3>
    <ul>
        {footerText.map((footer, key) => (
            <li key={key}>
                <a href={footer.link}>{footer.title}</a>
                <em>{footer.desc}</em>
            </li>
        ))}
    </ul>
</div>;
};

export default Footer;