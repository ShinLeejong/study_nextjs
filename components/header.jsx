export default function Header() {
    return (
      <>
        <header>
          <div className="wrapper_header">
              <div className="left">
                <ul>
                  <li>something</li>
                  <li>goes</li>
                  <li>here</li>
                </ul>
              </div>
              <div className="spacer"></div>
              <div className="right">
                <ul>
                  <li>again</li>
                  <li>here</li>
                  <li>too</li>
                </ul>
              </div>
          </div>
        </header>
        <style jsx>{`

            header {
              height: 3rem;
              border-bottom: 1px solid pink;
              background: blueviolet;
            }

            .wrapper_header {
              position: fixed;
              display: flex;
              width: 100%;
              height: 3rem;
              padding-left: 1rem;
              padding-right: 1rem;
            }

            .wrapper_header li {
              display: inline-block;
              padding-left: 1rem;
              padding-right: 1rem;
            }

            .wrapper_header > div {
              display: flex;
              align-items: center;
            }

            .wrapper_header > .left {
              text-align: left;
            }

            .wrapper_header > .spacer {
              flex-grow: 1;
            }

            .wrapper_header > .right {
              text-align: right;
            }

          `}
        </style>
      </>
    );
}