

const reactElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}
const MainContainer = document.querySelector("#root")

customRender(reactElement, MainContainer)