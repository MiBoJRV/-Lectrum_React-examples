const links = { dev: 'https://example.com/dev', prod: 'https://example.com/dev' };

// Оператор keyof формирует тип на основании ключей
type LinksType = typeof links;

const Component = () => {
    let componentLinks: LinksType = { dev: 'some dev link', prod: 'some prod link' };

    return <h1>Dev: { componentLinks.dev }</h1>;
}

export default Component;
