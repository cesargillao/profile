import { useRef } from 'react';
import CVEnglish from '../assets/cv/César Gil Lao 2023 - English.pdf';
import CVSpanish from '../assets/cv/César Gil Lao 2023 - Spanish.pdf';
import DocumentTextIcon from '../assets/icons/document-text.svg';
import CloseCircleIcon from '../assets/icons/close-circle.svg';

const ResumeBar = () => {

  const resumeBarRef = useRef();

  function closeResumeBar() {
    resumeBarRef.current.classList.remove('open');
  }

  return (
    <aside id="resume-bar" ref={resumeBarRef}>
      <div className="resume-bar-close" onClick={() => closeResumeBar()}>
        <img src={CloseCircleIcon} alt="Close" />
      </div>

      <div>
        <a className="cv" href={CVEnglish} download>
          <img src={DocumentTextIcon} alt="PDF" />
          <span>English CV</span>
        </a>
        <a className="cv" href={CVSpanish} download>
          <img src={DocumentTextIcon} alt="PDF" />
          <span>Spanish CV</span>
        </a>
      </div>
    </aside>
  )
}

export default ResumeBar