import React from "react"

const Skillset = ({ id, title, desc, img }) => {

  return (
    <article className={ "skillset skillset--" + id } >
      <div className="img__wrap">
        <strong className="skillset__subtitle">
          { id }
        </strong>
        <img src={ img } alt={ title } />
      </div>
      <div className="skillset__content">
        <header>
          <h2 className="skillset__title">
            { title }
          </h2>
        </header>
        <p className="desc desc--skillset">
          { desc }
        </p>
      </div>
    </article>
  );
}

export default Skillset
