import Breadcrumb from "./Breadcrumb"
import "../styles/subpage.css"

export default function SubPageLayout({ title, label, date, content, sections }) {

  return (

    <div>

      {/* Banner */}
      <div className="banner">
        <div className="banner-overlay">
          
        </div>
      </div>

      {/* Content */}
      <div className="all-subpage-content">
      <div className="container subpage-content">
        <Breadcrumb />
        <h1>{title}</h1>

        {/* <p className="date"><b>प्रकाशित तारीख :</b> {date}</p> */}

        <p className="date">
          <b>{label}</b> {date}
        </p>

        {/* Paragraph Content */}

        {content && content.map((para, index) => (
          <p key={index} className="content">{para}</p>
        ))}

        {/* Sections */}

        {sections && sections.map((section, index) => (

        <div key={index} className="section">

            <h3>{section.heading}</h3>

            {/* Image */}
            {section.image && (
            <img
                src={section.image}
                alt="structure"
                className="structure-img"
            />
            )}

            {/* ✅ TEXT WITH HTML SUPPORT */}
            {section.text && (
            <p dangerouslySetInnerHTML={{ __html: section.text }} />
            )}

            {/* ✅ LIST WITH HTML SUPPORT */}
            {section.list && (
            <ul className="scheme-list">

                {section.list.map((item, i) => (

                typeof item === "string" ? (
                    <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: item }}
                    />
                ) : (
                    <li key={i}>
                    <strong>{item.title}</strong>

                    {item.text && (
                        <span
                        dangerouslySetInnerHTML={{ __html: " – " + item.text }}
                        />
                    )}
                    </li>
                )

                ))}

            </ul>
            )}

           {/* table */} 

           {section.type === "table" && (
            <div className="table-container">
              <table className="custom-table">

                <thead>
                  <tr>
                    {section.headers.map((head, i) => (
                      <th key={i}>{head}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {section.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>
                          {cell.split("\n").map((line, k) => (
                            <div key={k}>{line}</div>
                          ))}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          )}

        </div>

        ))}

      </div>
      </div>

    </div>

  )

}