import React from 'react';

interface SourceFooterProps {
  source: string;
}

const SourceFooter: React.FC<SourceFooterProps> = ({ source }) => {
  return (
    <>
      <div className="footer-divider"></div>

      <div className="footer-wrapper">
        <h4 className="footer-title">Source</h4>

        <div>
          <a href={source} className="footer-link-wrapper">
            {source}
            <BoxArrowUpRightIcon
              className="footer-link-icon"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </>
  );
};

function BoxArrowUpRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
      />
      <path
        fillRule="evenodd"
        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
      />
    </svg>
  );
}

export default SourceFooter;