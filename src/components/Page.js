import "../styles/Page.css";

export default function Page({ data }) {
  return (
    <section className="page">
      <div className="container">
        <h2>{data.title}</h2>
        <p className="definition">{data.definition}</p>
        <a href={data.docs} className="docs-link">
          <p>Read docs</p>
          <img src="/icons/link-arrow-icon.svg" alt="read docs" />
        </a>
        {data.parameters && (
          <div className="sub">
            <b>Parameters:</b>
            {data.parameters.map((item) => (
              <p className="item">
                <span className="thingy">{item.parameter}</span>
                {item.explanation}
              </p>
            ))}
          </div>
        )}
        {data.returns && (
          <div className="sub">
            <b>Returns:</b>
            {data.returns.map((item) => (
              <p className="item">
                <span className="thingy">{item.parameter}</span>
                {item.explanation}
              </p>
            ))}
          </div>
        )}
        {data.examples.length >= 1 && (
          <div className="sub">
            <b>Examples:</b>
            {data.examples.map((example) => (
              <div className="example" key={example.image}>
                <p>{example.explanation}</p>
                <div className="img-wrapper">
                  <img
                    src={`https://raw.githubusercontent.com/Pand3moniuMx3/MONOCHROMATIC_API/main/images${example.image}`}
                    alt={`example of ${data.title}`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
