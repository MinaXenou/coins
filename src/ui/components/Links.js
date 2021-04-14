const Links = ({ ...props }) => {
  const { links } = props;
  return (
    <div className="coin-links">
      <div>
        {Object.keys(links).map((linkTitle) => (
          <div>
            <span className="link-title">
              <b>{linkTitle}</b>
            </span>
            {printLinks(data.links[linkTitle])}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
