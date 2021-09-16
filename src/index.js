const createElement = (type, props, ...children) => {
    return {
        type,
        props: {
            ...props,
            children: children.map(child =>
                typeof child === 'object' ? child : createTextElement(child)
            )
        }
    }
};

const createTextElement = (text) => {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: []
        }
    };
};

const render = (element, container) => {
    const domNode = element.type === 'TEXT_ELEMENT' ?
        document.createTextNode('') : document.createElement(element.type);
    Object.keys(element.props)
        .filter(key => key !== 'children')
        .forEach(name => {
            domNode[name] = element.props[name];
        });
    element.props.children.forEach(child => render(child, domNode));
    container.appendChild(domNode);
};

const Own = {
    createElement,
    render
};

/** @jsx Own.createElement */
const element = (
    <div class="container">
        <h1>Hello Own React</h1>
        <p>Such a basic react like framework</p>
    </div>
);
const container = document.getElementById('root');
Own.render(element, container);

